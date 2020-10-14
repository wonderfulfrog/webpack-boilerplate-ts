import merge from "webpack-merge";

import common from "./webpack.common.config.babel";

module.exports = merge(common, {
  mode: "production"
});
