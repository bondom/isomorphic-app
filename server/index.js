
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const devConfig = require('../webpack.dev.js');

const app = express();
//import serverRenderer from './app.jsx';


const compiler= webpack(devConfig);

app.use(webpackDevMiddleware(compiler, {
    serverSideRender: true
}));
app.use(webpackHotServerMiddleware(compiler));


//app.use(serverRenderer());
app.listen(6060);
