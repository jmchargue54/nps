import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        centers: resolve(__dirname, "src/visitor-center.html"),
        conditions: resolve(__dirname, "src/conditions.html")
      }
    }
  }
});
