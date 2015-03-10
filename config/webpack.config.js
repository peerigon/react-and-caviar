"use strict";

var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, "../client/app.jsx")
    ],
    output: {
        path: path.resolve(__dirname, "../public/assets"),
        publicPath: "assets",
        filename: "app.js"
    },
    watch: true,
    cache: true,
    devtool: "eval",
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: "react-hot!jsx?harmony"
            }
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
};
