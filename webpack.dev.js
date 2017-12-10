const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');
const commonConfig = require('./webpack.common.js');

const startOnlyClient = process.env.BUILD_TYPE === "client";

function StubPlugin(options){};
StubPlugin.prototype.apply = (compiler) => {
    compiler.plugin('after-emit', (compilation, callback) => {
        console.log('Started only client side');
        callback();
    });
};

const merged = merge(commonConfig, {
    devtool: "cheap-module-eval-source-map",
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity
        }),
        new webpack.NamedModulesPlugin(),
        !startOnlyClient
            ? new WebpackShellPlugin({
                onBuildEnd: [`cross-env NODE_ENV=development NODE_PATH=./src nodemon --watch server --watch build server`]
            })
            : new StubPlugin()
    ]
});

module.exports = merged;

