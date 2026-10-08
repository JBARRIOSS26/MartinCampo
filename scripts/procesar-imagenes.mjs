/**
 * Procesa las imágenes de producto que NO traen marca de agua:
 *  1. Fondo blanco: aplana transparencias sobre blanco y centra en un lienzo cuadrado blanco.
 *  2. Marca de agua: replica el patrón de las fotos oficiales (logo semitransparente en zigzag).
 *
 * Origen:  public/assets/images/Hogar/<subcarpetas>/*.png|jpg|jpeg
 * Destino: public/assets/images-wm/Hogar/<subcarpetas>/*.webp  (los originales no se tocan)
 *
 * Uso:  npm run imagenes
 * Para procesar otras carpetas, agrégalas a CARPETAS_ORIGEN.
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const IMAGES = path.join(ROOT, "public/assets/images");
const OUT = path.join(ROOT, "public/assets/images-wm");
const LOGO = path.join(IMAGES, "Logo/logo-martin-campo.jpg");

// Carpetas (relativas a public/assets/images) cuyas imágenes necesitan marca de agua
const CARPETAS_ORIGEN = ["Hogar"];
const EXTENSIONES = new Set([".png", ".jpg", ".jpeg"]);

const SIZE = 1200; // lienzo final cuadrado
const PADDING = 0.04; // margen blanco alrededor del producto (solo si se reescala)
const WM_OPACITY = 0.38; // intensidad de la marca de agua
const WM_WIDTH = 0.36; // ancho del logo relativo al lienzo

// Posiciones (centro del logo, relativas) que imitan el zigzag de las fotos oficiales
const WM_POSICIONES = [
  [0.26, 0.11],
  [0.68, 0.31],
  [0.26, 0.5],
  [0.68, 0.69],
  [0.26, 0.89],
];

/** Convierte el logo (fondo blanco) en un PNG con alfa y opacidad reducida. */
async function crearLogoMarcaAgua() {
  const width = Math.round(SIZE * WM_WIDTH);
  const { data, info } = await sharp(LOGO)
    .trim({ background: "#ffffff", threshold: 10 })
    .resize({ width })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    // Alfa = cuánto se aleja del blanco; luego "des-premultiplicamos" el color
    const a = (255 - Math.min(r, g, b)) / 255;
    const un = (c) => (a > 0 ? Math.max(0, Math.min(255, (c - 255 * (1 - a)) / a)) : 0);
    out[j] = un(r);
    out[j + 1] = un(g);
    out[j + 2] = un(b);
    out[j + 3] = Math.round(a * WM_OPACITY * 255);
  }
  return sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toBuffer({ resolveWithObject: true });
}

function listar(dir) {
  const res = [];
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) res.push(...listar(p));
    else if (EXTENSIONES.has(path.extname(f).toLowerCase())) res.push(p);
  }
  return res;
}

async function procesar(file, logo) {
  const meta = await sharp(file).metadata();
  // Imágenes con transparencia: recortamos el área vacía para que el producto quede bien encuadrado
  const base = meta.hasAlpha
    ? await sharp(file).rotate().trim().png().toBuffer()
    : await sharp(file).rotate().toBuffer();
  const cuadrada = !meta.hasAlpha && meta.width === meta.height;
  const inner = cuadrada ? SIZE : Math.round(SIZE * (1 - PADDING * 2));

  // Producto aplanado sobre blanco y contenido en el área útil
  const producto = await sharp(base)
    .flatten({ background: "#ffffff" })
    .resize(inner, inner, { fit: "contain", background: "#ffffff" })
    .toBuffer();

  const offset = Math.round((SIZE - inner) / 2);
  const marcas = WM_POSICIONES.map(([cx, cy]) => ({
    input: logo.data,
    left: Math.round(cx * SIZE - logo.info.width / 2),
    top: Math.round(cy * SIZE - logo.info.height / 2),
  }));

  const rel = path.relative(IMAGES, file);
  const destino = path.join(OUT, rel).replace(/\.(png|jpe?g)$/i, ".webp");
  fs.mkdirSync(path.dirname(destino), { recursive: true });

  await sharp({ create: { width: SIZE, height: SIZE, channels: 3, background: "#ffffff" } })
    .composite([{ input: producto, left: offset, top: offset }, ...marcas])
    .webp({ quality: 82 })
    .toFile(destino);

  return path.relative(ROOT, destino);
}

const logo = await crearLogoMarcaAgua();
let total = 0;
for (const carpeta of CARPETAS_ORIGEN) {
  for (const file of listar(path.join(IMAGES, carpeta))) {
    const out = await procesar(file, logo);
    console.log("✔", out);
    total++;
  }
}
console.log(`\n${total} imágenes procesadas en public/assets/images-wm`);
