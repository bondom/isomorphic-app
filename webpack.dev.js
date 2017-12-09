const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common.js');

const commonConfigReadyToBeMerged = {client: commonConfig[0], server: commonConfig[1]};
//console.log(JSON.stringify(commonConfigReadyToBeMerged, null, 2));
const merged = merge.multiple(commonConfigReadyToBeMerged, {
    client: {
        devtool: "cheap-module-eval-source-map",
/*        devServer: {
            contentBase: "./build", //this tells webpack-dev-server to serve files from build directory,
            publicPath: '/', //content from build folder will be accessed with this path
            historyApiFallback: true,
            hot: true
        },*/
        plugins: [
            //Make sure the entry chunk is cheap to emit by keeping it small,
            // The following code block extracts a chunk containing only the runtime with all other chunks as children
            // Detailed: https://webpack.js.org/guides/build-performance/#minimal-entry-chunk
            new webpack.optimize.CommonsChunkPlugin({
                name: "manifest",
                minChunks: Infinity
            }),
            /*snew HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src', 'index-t.ejs'),
                filename: 'index.html',
            }),*/
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ]
    },
    server: {
        devtool: "cheap-module-eval-source-map"
    }
});

//console.log("\n\n\nMERGED:" + JSON.stringify(merged, null, 2));
module.exports = merged;

