import merge from "webpack-merge";

import common from "./webpack.common.config.babel";

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  output: {
    publicPath: "/"
  },
  devServer: {
    disableHostCheck: true,
    writeToDisk: true,
    historyApiFallback: {
      index: "/index.html"
    }
  }
});
