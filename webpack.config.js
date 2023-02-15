const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/js/entry.js"
    },

    output: {
        filename: "js/[name].[hash:8].js",
        path: __dirname + '/dist'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract(['css-loader'])
        },
        {
            test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash:4].[ext]',
                        outputPath: 'images/'
                    }
                },
            ]
        }]
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: '聚合收款码',
            filename: "index.html",
            template: 'underscore-template-loader!./src/index.ejs',
            favicon: "src/images/favicon.ico",
            inject: true,
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                removeAttributeQuotes: true

            }
        }),
        new ExtractTextPlugin("css/[name].[hash:8].css"),

    ],

};