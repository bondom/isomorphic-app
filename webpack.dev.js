const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');
const commonConfig = require('./webpack.common.js');

const merged = merge(commonConfig, {
    devtool: "cheap-module-eval-source-map",
    devServer: {
      hot: true
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()/*,
        new WebpackShellPlugin({
            onBuildEnd: [`cross-env NODE_ENV=development NODE_PATH=./src nodemon --watch server server`]
        }),*/
    ]
});

module.exports = merged;

