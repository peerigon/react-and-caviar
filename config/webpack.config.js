"use strict";

var path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "../client/app.js"),
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
                loader: "jsx?harmony"
            }
        ]
    }
};
