//const express = require('express');
import React from 'react';
import express from 'express';
import App from '../src/components/layout/App.jsx';
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server';
import render from "./render";
import 'assets/styles/global.scss';
import path from 'path';
import fs from 'fs';


const filePath = path.resolve(__dirname, '..', 'build', 'index.html');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../webpack.dev.js');
const compiler = webpack(config);

const app = express();



app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler, {
    reload: true
}));

/*app.get("*", (req,res,next) => {
    console.log("Request!!!!  " + req.originalUrl);
    next();
});*/
//TODO: problem with reloading page on routes different from /
app.use((req,res) => {
    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        console.log("Request!!: " + req.originalUrl);
        if (err) {
            console.error('read err', err);
            return res.status(404).end()
        }

        const html = renderToString(
            <StaticRouter location={req.url} context={{}}>
                <App initialData={{}}/>
            </StaticRouter>
        );
        const replacedHtmlData = htmlData
            .replace('{{html}}', html);
        res.status(200).send(replacedHtmlData);
    });
});

app.listen(6060, () => {
    console.log("Listening on port 6060");
});
