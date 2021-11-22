module.exports = {
  plugins: [
    // Inline @import rules content with extra features.
    require("postcss-easy-import")({}),
    // Automatic prefixing and browser compatibility.
    // Cross-browserify
    require("autoprefixer")({
      grid: "autoplace",
    }),
  ].concat(
    process.env.NODE_ENV === "production"
      ? [
          // Purge all selectors not used in the src/ folder.
          require("@fullhuman/postcss-purgecss")({
            content: ["./src/**/*.tsx"],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
            whitelist: ["body"],
          }),
          // Optimize for performance
          require("cssnano-preset-default")({
            discardComments: {
              removeAll: true,
            },
          }),
        ]
      : [],
  ),
};
