//const express = require('express');
import React from 'react';
import express from 'express';
import App from '../src/components/layout/App.jsx';
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server';
import render from "./render";
import 'assets/styles/global.scss';


const app = express();
app.use(express.static('./build'));
app.use((req,res) => {
    const html = renderToString(
        <StaticRouter location={req.url} context={{}}>
            <App initialData={{}}/>
        </StaticRouter>
    );
    res.status(200).send(render(html));
})

app.listen(6060, () => {
    console.log("Listening");
});
