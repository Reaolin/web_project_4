const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: { main: "./src/pages/index.js" },
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: "babel-loader",
				exclude: "/node_modules/",
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
						},
					},
					"postcss-loader",
				],
			},
			{
				test: /\.html$/,
				use: "html-loader",
			},
			{
				test: /\.(png|svg|jpg|gif|woff|woff2)$/,
				use: "file-loader",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
		}),
		new MiniCssExtractPlugin(),
	],
};
