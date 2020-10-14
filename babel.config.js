const path = require("path");

module.exports = {
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-object-rest-spread",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-runtime",
    [
      "module-resolver",
      {
        root: __dirname,
        alias: {
          "/": path.resolve(__dirname, "src")
        }
      }
    ]
  ],
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
  ]
};
