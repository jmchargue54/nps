import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        centers: resolve(__dirname, "src/visitor-center.html"),
        main: resolve(__dirname, "src/index.html"),
        conditions: resolve(__dirname, "src/conditions.html")
      }
    }
  }
});
