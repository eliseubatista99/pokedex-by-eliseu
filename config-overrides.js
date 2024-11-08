const path = require("path");

module.exports = function override(config, env) {
  // Enable path aliases
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      "@src": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@configs": path.resolve(__dirname, "src/configs"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@fonts": path.resolve(__dirname, "src/fonts"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@iconography": path.resolve(__dirname, "src/iconography"),
      "@screens": path.resolve(__dirname, "src/screens"),
      "@store": path.resolve(__dirname, "src/store"),
      "@types": path.resolve(__dirname, "src/types"),
      "@modals": path.resolve(__dirname, "src/modals"),
      "@drawers": path.resolve(__dirname, "src/drawers"),
    },
  };

  return config;
};
