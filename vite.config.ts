import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Use base path when building for production (GitHub Pages)
  const base = mode === "production" ? "/newsSite/" : "/";

  return {
    plugins: [react()],
    base: base,
    optimizeDeps: {
      exclude: ["lucide-react"],
    },
  };
});
