import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

// Solo necesario en Windows local; en Vercel/Linux no aplica
if (process.env.VERCEL || process.env.CI) {
  process.exit(0);
}

const viteClientPath = join(
  process.cwd(),
  'node_modules',
  'vite',
  'dist',
  'client',
  'client.mjs',
);

if (!existsSync(viteClientPath)) {
  process.exit(0);
}

const contents = readFileSync(viteClientPath, 'utf-8');

if (contents.includes('\r\n')) {
  writeFileSync(viteClientPath, contents.replace(/\r\n/g, '\n'), 'utf-8');
}
