import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  esbuild: {
    logLevel: "silent", // Suppress warnings/errors
  },
  build: {
    outDir: "dist",
    sourcemap: true, // Useful for debugging in production
  },
  server: {
    host: true, // Allow external access (if needed)
    strictPort: true, // Prevent port conflicts
  },
});
