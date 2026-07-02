#!/usr/bin/env node
/**
 * SVG → PNG конвертер через sharp.
 * Использование:
 *   node scripts/svg-to-png.mjs <input.svg> [output.png] [size]
 * По умолчанию делает 3 размера: 256, 512, 1024 px.
 */
import sharp from "sharp";
import { readFileSync } from "node:fs";
import { resolve, dirname, basename, extname } from "node:path";

const args = process.argv.slice(2);
const input = args[0];
if (!input) {
  console.error("Usage: node scripts/svg-to-png.mjs <input.svg> [output.png] [size]");
  process.exit(1);
}

const inputPath = resolve(input);
const outputBase = args[1]
  ? resolve(args[1]).replace(/\.png$/i, "")
  : resolve(dirname(inputPath), basename(inputPath, extname(inputPath)));

const explicitSize = args[2] ? parseInt(args[2], 10) : null;
const sizes = explicitSize ? [explicitSize] : [256, 512, 1024];

const svg = readFileSync(inputPath);

for (const size of sizes) {
  const suffix =
    sizes.length === 1 ? "" : size === 1024 ? "@3x" : size === 512 ? "@2x" : "";
  const out = `${outputBase}${suffix}.png`;
  await sharp(svg, { density: 300 })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`✓ ${out} (${size}×${size})`);
}
