const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader', options: { minimize: true } }]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader?cacheDirectory=true',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.(css|less)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name:'[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name:'[name].[ext]',
                        outputPath: 'images/'
                    }
                }]
            },
            // 加载字体
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'font/'
                    }
                }]
            }
        ]
    },

    resolve: {
        alias: {
            '@': path.resolve('src'),
        }
    },

    plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Production',
			template: './src/index.html',
			inject: 'body',
			minify: false
		}),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: ['vendor', 'runtime'],
		// 	filename: '[name].js',
		// 	minChunks: Infinity
		// })
    ],

	optimization: {
		splitChunks: {
			chunks: 'all'
		}
    }
};
