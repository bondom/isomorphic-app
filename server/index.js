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

const filePath = path.resolve(__dirname, '..', 'build', 'index-template.html');

const app = express();
app.use(express.static('./build'));
app.use((req,res) => {
    fs.readFile(filePath, 'utf8', (err, htmlData) => {
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
/*            .replace(/__INITIAL_DATA__PLACEHOLDER__/g, serialize(initialData))
            .replace('{{META}}', meta);*/
        res.status(200).send(replacedHtmlData);
    });
});

app.listen(6060, () => {
    console.log("Listening");
});
