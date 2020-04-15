const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	context: path.resolve(__dirname, 'src/'),
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist/'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: path.resolve(__dirname, 'node_modules/'),
				include: path.resolve(__dirname, 'src/'),
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'css': path.resolve(__dirname, 'assets/css/'),
			'src': path.resolve(__dirname, 'src/')
		}
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist/'),
		compress: true,
		port: 5000
	},
	plugins: [
		new MiniCssExtractPlugin({
			chunkFilename: 'styles.css'
		}),
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	]
}