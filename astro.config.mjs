import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: "static",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            // Animation libraries
            if (id.includes("node_modules/framer-motion") || id.includes("node_modules/motion")) {
              return "vendor-motion";
            }
            // Lottie (heaviest single dep, contains eval)
            if (id.includes("node_modules/lottie")) {
              return "vendor-lottie";
            }
            // Everything else in node_modules goes into one stable vendor chunk
            // (React, icons, headlessui, etc.) — lets Rollup manage load order
            if (id.includes("node_modules")) {
              return "vendor";
            }
            // Split each page into its own chunk
            if (id.includes("src/components/pages/LandingPage")) return "page-home";
            if (id.includes("src/components/pages/ProjectsPage") || id.includes("src/components/pages/MyProjects")) return "page-projects";
            if (id.includes("src/components/pages/MyResume")) return "page-resume";
            if (id.includes("src/components/pages/ContactMe")) return "page-contact";
            if (id.includes("src/components/pages/NotFound")) return "page-404";
          },
        },
      },
    },
  },
});
