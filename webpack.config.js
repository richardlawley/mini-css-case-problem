const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = (env = {}, argv = {}) => {
	const isProd = (process.env.NODE_ENV && process.env.NODE_ENV === 'production');
    const devMode = isProd ? 'production' : 'development';

    const config = {
        plugins: [
            new MiniCssExtractPlugin({
				filename: 'style.css'
			}),
        ],
        module: {
            rules: [
                {
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader"
					}
				},
                {
					test: /\.css$/,
					use: [
						'style-loader',
                        {
							loader: MiniCssExtractPlugin.loader,
							options: {
								esModule: false
							}
						},
						'css-loader'
					]
				}
            ]
        }
    };

    return config;
}