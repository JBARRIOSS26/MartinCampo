import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const IMAGES = path.join(ROOT, "public/assets/images");
const LOGO = path.join(IMAGES, "Logo/logo-martin-campo.jpg");
const TARGET = path.join(IMAGES, "Lavadoras y Secadoras/Funda para lavadora redonda tradicional.webp");
const BACKUP = path.join(IMAGES, "Lavadoras y Secadoras/Funda para lavadora redonda tradicional.orig.webp");

const SIZE = 1200;
const PADDING = 0.04;
const WM_OPACITY = 0.38;
const WM_WIDTH = 0.36;

const WM_POSICIONES = [
  [0.26, 0.11],
  [0.68, 0.31],
  [0.26, 0.5],
  [0.68, 0.69],
  [0.26, 0.89],
];

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

async function main() {
  if (!fs.existsSync(BACKUP)) {
    fs.copyFileSync(TARGET, BACKUP);
    console.log("Copia de respaldo creada:", BACKUP);
  }

  const logo = await crearLogoMarcaAgua();
  const meta = await sharp(BACKUP).metadata();

  // Recortar si tiene bordes blancos y reescalar dentro de lienzo
  const inner = Math.round(SIZE * (1 - PADDING * 2));
  
  // Aplanamos sobre fondo blanco y redimensionamos contenido proporcionalmente
  const producto = await sharp(BACKUP)
    .flatten({ background: "#ffffff" })
    .resize(inner, inner, { fit: "contain", background: "#ffffff" })
    .toBuffer();

  const offset = Math.round((SIZE - inner) / 2);
  const marcas = WM_POSICIONES.map(([cx, cy]) => ({
    input: logo.data,
    left: Math.round(cx * SIZE - logo.info.width / 2),
    top: Math.round(cy * SIZE - logo.info.height / 2),
  }));

  await sharp({ create: { width: SIZE, height: SIZE, channels: 3, background: "#ffffff" } })
    .composite([{ input: producto, left: offset, top: offset }, ...marcas])
    .webp({ quality: 85 })
    .toFile(TARGET);

  console.log("Imagen con marca de agua guardada exitosamente en:", TARGET);
}

main().catch(console.error);
