/**
 * Webpack config for pro
 */
const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin');	// js文件进行压缩
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');  // css进行压缩
const path = require('path');

module.exports = merge(common, {
	mode: 'production',
	plugins: [
		// new UglifyJSPlugin({
		// 		sourceMap: true
		// }),

		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
	],

	optimization: {
		splitChunks: {
			chunks: 'all',//默认只作用于异步模块，为`all`时对所有模块生效,`initial`对同步模块有效
			// minSize: 30000, //合并前模块文件的体积
			// minChunks: 1,//最少被引用次数
			// maxAsyncRequests: 5,
			// maxInitialRequests: 3,
			// automaticNameDelimiter: '~',//自动命名连接符

			cacheGroups: {
				vendor: {
					name: 'vendor',
					test: /[\\/]node_modules[\\/]/,
					minChunks:1,
					priority: 20 //优先级更高
				},

				commons: {
					name: 'commons',
					test: path.resolve('./src/components'),
					minChunks: 3, // 最小公用次数
					priority: 5,
					reuseExistingChunk: true
				}
			}
		},
		runtimeChunk:{
			name:'manifest'
		},

		minimizer: [
			new TerserJSPlugin({
				include: /\/src/,
				test: /\.js(\?.*)?$/i,
			}),
			new OptimizeCSSAssetsPlugin({})
		],
	}
});
