/* eslint-disable @typescript-eslint/no-explicit-any */
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@assets", replacement: "/src/assets" },
      {
        find: "@components",
        replacement: "/src/components",
      },
      { find: "@configs", replacement: "/src/configs" },
      {
        find: "@constants",
        replacement: "/src/constants",
      },
      {
        find: "@contexts",
        replacement: "/src/contexts",
      },
      { find: "@fonts", replacement: "/src/fonts" },
      { find: "@helpers", replacement: "/src/helpers" },
      { find: "@hooks", replacement: "/src/hooks" },
      {
        find: "@iconography",
        replacement: "/src/iconography",
      },
      { find: "@screens", replacement: "/src/screens" },
      { find: "@store", replacement: "/src/store" },
      { find: "@types", replacement: "/src/types" },
      { find: "@modals", replacement: "/src/modals" },
      { find: "@drawers", replacement: "/src/drawers" },
    ],
    // alias: {
    //   "@assets": "/src/assets",
    //   "@components": "/src/components",
    //   "@configs": "/src/configs",
    //   "@constants": "/src/constants",
    //   "@contexts": "/src/contexts",
    //   "@fonts": "/src/fonts",
    //   "@helpers": "/src/helpers",
    //   "@hooks": "/src/hooks",
    //   "@iconography": "/src/iconography",
    //   "@screens": "/src/screens",
    //   "@store": "/src/store",
    //   "@types": "/src/types",
    //   "@modals": "/src/modals",
    //   "@drawers": "/src/drawers",
    // },
  },
  test: {
    global: true,
    environment: "jsdom",
  },
} as any);
