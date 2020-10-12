const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // connect plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: { main: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        // this regular expression will search for files with the following extensions
        test: /\.(png|svg|jpg|gif|woff2)$/,
        // file-loader should be used when processing those files
        loader: "file-loader"
      },
      // add the rule for working with HTML in a similar way
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        // use these rules only for CSS files
          test: /\.css$/,
        // use MiniCssExtractPlugin.loader and css-loader
        // when processing these files
          loader:  [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    // set up plugin
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin() // connect the plugin for merging CSS files

  ]
}; 