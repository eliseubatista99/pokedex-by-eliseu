import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@configs": "/src/configs",
      "@constants": "/src/constants",
      "@contexts": "/src/contexts",
      "@fonts": "/src/fonts",
      "@helpers": "/src/helpers",
      "@hooks": "/src/hooks",
      "@iconography": "/src/iconography",
      "@screens": "/src/screens",
      "@store": "/src/store",
      "@types": "/src/types",
      "@modals": "/src/modals",
      "@drawers": "/src/drawers",
    },
  },
});
