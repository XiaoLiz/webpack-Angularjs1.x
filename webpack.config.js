const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // path: path.resolve(process.cwd(), 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    mode: "development",
    devtool: 'inline-source-map', //仅用于开发环境
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        hot: true,
        compress: false,
        port: 9000
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
            template: './src/index.html',
            inject: 'body',
            minify: false
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),

        // new MiniCssExtractPlugin({
        //     filename: devMode ? '[name].css' : '[name].[hash].css',
        //     chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        // }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "windows.jQuery": "jquery"
        }),
    ]
};
