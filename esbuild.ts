import { build } from "esbuild";

// eslint-disable-next-line unicorn/prefer-top-level-await
void (async function () {
  await build({
    entryPoints: ["src/index.ts"],
    logLevel: "info",
    outdir: "dist",
    minify: false,
    bundle: true,
    platform: "node",
    format: "cjs",
    sourcemap: true,
  });
})();

