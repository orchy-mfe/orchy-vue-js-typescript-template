/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import { visualizer } from "rollup-plugin-visualizer";
import qiankun from "vite-plugin-qiankun";

const port = process.env.PORT ? parseInt(process.env.PORT) : 8080;

export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    svgLoader(),
    qiankun("orchy-vue-js-typescript-template", { useDevMode: true }),
    visualizer(),
  ],
  base:
    mode === "development"
      ? `http://localhost:${port}/`
      : "/orchy-vue-js-typescript-template/",
  server: { port, cors: true },
  test: {
    environment: "happy-dom",
    mockReset: true,
  },
}));
