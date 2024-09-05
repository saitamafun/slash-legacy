module.exports = function (context, options) {
  return {
    name: "unocss",
    configurePostCss(postcssOptions) {
      postcssOptions.plugins = [
        require("@unocss/postcss"),
        require("autoprefixer"),
      ];
      return postcssOptions;
    },
  };
};
