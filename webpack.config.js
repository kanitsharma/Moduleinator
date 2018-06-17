const NodemonPlugin = require("nodemon-webpack-plugin");
const path = require("path");

module.exports = {
  target: "node",
  output: {
    libraryTarget: "commonjs2"
  },
  plugins: [
    new NodemonPlugin({
      watch: path.resolve("./dist")
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-pipeline-operator"]
          }
        }
      }
    ]
  }
};
