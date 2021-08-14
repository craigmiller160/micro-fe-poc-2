const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const deps = require('./package.json').dependencies;

module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.join(__dirname, 'src', 'ReactParentIndex.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'assets/js/[name].[contenthash].js',
        publicPath: '/'
    },
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            path.join(__dirname, 'node_modules')
        ]
    },
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, 'src'),
        hot: true,
        historyApiFallback: {
            index: '/'
        },
        proxy: {
            '/oldReactChild': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                pathRewrite: {
                    '^/oldReactChild': ''
                },
                logLevel: 'debug'
            },
            '/newReactChild': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                pathRewrite: {
                    '^/newReactChild': ''
                },
                logLevel: 'debug'
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'ReactParentIndex.html')
        }),
        new ModuleFederationPlugin({
            name: 'reactParent',
            filename: 'remoteEntry.js',
            remotes: {
                oldReactChild: 'oldReactChild@/oldReactChild/remoteEntry.js',
                newReactChild: 'newReactChild@/newReactChild/remoteEntry.js'
            },
            exposes: {},
            shared: {
                // TODO try ditching eager
                react: {
                    eager: true,
                    singleton: true,
                    requiredVersion: deps.react
                },
                'react-dom': {
                    eager: true,
                    singleton: true,
                    requiredVersion: deps.react
                }
            }
        }),
        new TerserPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"]
            },
        ],
    },
};
