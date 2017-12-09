const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const IsomorphicLoaderPlugin = require("isomorphic-loader/lib/webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const extractSass = new ExtractTextPlugin({
    filename: `assets/css/style${isDev ? '' : '.[chunkhash]'}.css`/*,
    disable: isDev*/
});


module.exports = {
        context: path.resolve(__dirname, 'src'),
        entry: {
            client: "./index.js"
        },
        output: {
            path: path.join(__dirname, "/build"),
            filename: `[name]${isDev ? '' : '.[chunkhash]'}.js`,
            publicPath: "/"
        },
        resolve: {
            modules: [path.resolve(__dirname, "src"), "node_modules"],
            extensions: [".js", ".jsx"]
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: extractSass.extract({
                        use: [{
                            loader: "css-loader" // translates CSS into CommonJS
                        }, {
                            loader: "sass-loader", // compiles Sass to CSS
                            options: {
                                includePaths: ["src"]
                            }
                        }],
                        /*// use style-loader in development
                        fallback: "style-loader" // creates style nodes from JS strings(Adds CSS to the DOM by injecting a <style> tag)*/
                    })
                },
/*                {
                    enforce: "pre", //checking source files, not modified by other loaders
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: "eslint-loader",
                    options: {
                        emitWarning: true
                    }
                },*/
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    include: [
                        path.resolve(__dirname, "src")
                    ],
                    loader: "babel-loader",
                    options: {
                        //modules is false to avoid converting static ES6 import and export into dynamic ones => Tree Shaking works
                        presets: [["react"], ["es2015", {modules: false}]],
                        babelrc: false //to get rid of using .babelrc file that is used by jest
                    }
                },
                {
                    test: /\.(png|jpg)/,
                    use: [
                        'file-loader?name=[path][name].[ext]',
                        'isomorphic-loader'
                    ]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    include: path.resolve(__dirname, "src/assets/fonts"),
                    use: [
                        'file-loader?name=[path][name].[ext]'
                    ]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(['build']),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }),
            extractSass,
            new IsomorphicLoaderPlugin()

        ]

    }


