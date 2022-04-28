const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

// 참고: https://webpack.kr/configuration/#options
module.exports = {
	mode: process.env.NODE_ENV,
	entry: {
		"js/app": ["./src/index.jsx"],
	},
	output: {
		path: path.resolve(__dirname, "dist/"),
		publicPath: "/",
	},
	devServer: {
		port: 8888,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: ["babel-loader"],
				exclude: /node_modules/,
			},
			{
				// write image files under 10k to inline or copy image files over 10k
				test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 10000,
							fallback: "file-loader",
							name: "images/[name].[ext]",
						},
					},
				],
			},
			{
				// write files under 10k to inline or copy files over 10k
				test: /\.(woff2|woff|eot|ttf|otf)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 10000,
							fallback: "file-loader",
							name: "fonts/[name].[ext]",
						},
					},
				],
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "index.html",
		}),
	],
};
