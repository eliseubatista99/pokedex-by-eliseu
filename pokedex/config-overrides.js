const path = require("path");

module.exports = function override(config, env) {
  // Enable path aliases
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      ["@assets"]: path.resolve(__dirname, "src/assets"),
      ["@components"]: path.resolve(__dirname, "src/components"),
      ["@constants"]: path.resolve(__dirname, "src/constants"),
      ["@fonts"]: path.resolve(__dirname, "src/fonts"),
      ["@hooks"]: path.resolve(__dirname, "src/hooks"),
      ["@pages"]: path.resolve(__dirname, "src/pages"),
      ["@structure"]: path.resolve(__dirname, "src/structure"),
    },
  };

  return config;
};
