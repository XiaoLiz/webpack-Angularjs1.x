const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: {
		app: './src/app.js'
	},
    output: {
        path: path.resolve(__dirname,  '../dist'),
        filename: 'assets/script/[name].[hash:6].bundle.js',
		chunkFilename: 'assets/script/[name].[hash:6].bundle.js'
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
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: devMode, // 仅dev环境启用HMR功能
						},
					},
                    "css-loader",
                    "less-loader",
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name:'[name].[hash:6].[ext]',
                        outputPath: 'assets/images/'
                    }
                }]
            },
            // 加载字体
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
						name: '[name].[hash].[ext]',
						outputPath: 'assets/font/'
                    }
                }]
            }
        ]
    },

    resolve: {
		extensions: ['.js'],
        alias: {
            '@': path.resolve('src'),
        }
    },

    plugins: [-
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: "index.html",
			inject: 'body',
			minify: false
		}),

		new MiniCssExtractPlugin({
			filename: devMode ? 'assets/style/[name].css' : 'assets/style/styles.[hash:6].css',
			chunkFilename: devMode ? 'assets/style/[id].css' : 'assets/style/styles.[hash:6].css'
		})
    ]
};
