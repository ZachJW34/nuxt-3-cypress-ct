import { loadNuxt } from "nuxt";
import { getCtx, getViteClientConfig } from "@nuxt/vite-builder";
import { getWebpackConfigs } from "@nuxt/webpack-builder";

const main = async () => {
  const nuxt = await loadNuxt({ cwd: process.cwd(), dev: true, ready: true });

  // const ctx = await getCtx(nuxt);
  // const viteClientConfig = getViteClientConfig(ctx);
  // console.log({ viteClientConfig });

  const webpackConfigs = await getWebpackConfigs(nuxt);

  console.log({ webpackConfigs });
};

main();
