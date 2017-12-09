const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const prodConfig = merge(commonConfig, {
        devtool: "source-map", //takes some memory, but useful for debugging
        entry: {
            vendor: [
                "react"
            ]
        },
        plugins: [
            new webpack.HashedModuleIdsPlugin(),

            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'runtime'
            }),
            new UglifyJSPlugin({
                sourceMap: true
            })
        ]
});

module.exports = prodConfig;

