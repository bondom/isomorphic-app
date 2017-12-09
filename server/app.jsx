const express = require('express');
const path = require('path');
const React = require('react');
const fs = require('fs')
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const App = require('../src/components/layout/App.jsx').default;
//const {default: render} = require('./render'); //TODO: delete or adopt
/*
import DocumentMeta from 'react-document-meta';

import { getQAs } from '../src/actions/qa';
import serialize from 'serialize-javascript'; //to prevent XSS attacks
*/

module.exports = function serverRenderer() {



    return (req, res, next) => {
        console.log("Before");
        const markup = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={{}}>
                <App initialData={{}}/>
            </StaticRouter>
        );
        console.log("Markup: " + markup);
        res.status(200).send(`
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>User Profile</title>
                </head>
                <body>
            
                    <div id="root"></div>
            
                </body>
            </html>
        `);
    };
}

/*
const app = express();

const filePath = path.resolve(__dirname, '..', 'build', 'index.html');


const initData = (req,res,next) => {
    let initialData = {};
    if(req.originalUrl === "/" ) {
        initialData = {qas: getQAs(), dangerScript: "<script>console.log('Danger!!!')</script>"};
    }

    res.locals.initialData = initialData;
    next();
}

const universalLoader = (req, res) => {
    console.log("Server");
    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('read err', err);
            return res.status(404).end()
        }

        const initialData = res.locals.initialData;
        console.log(App);
        const markup = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={{}}>
                <App initialData={initialData}/>
            </StaticRouter>
        );
        const meta = DocumentMeta.renderAsHTML();
        const replacedHtmlData = htmlData
            .replace('{{SSR}}', markup)
            .replace(/__INITIAL_DATA__PLACEHOLDER__/g, serialize(initialData))
            .replace('{{META}}', meta);
        res.status(200).send(replacedHtmlData);
    });
};

//if we don't want to use ssr,
//just ensures that refreshing pages with paths different from root one will return page
/!*app.get('/!*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});*!/


//handle root url, if don't do this before static resources, page from build folder(just SPA) will be returned for root url
app.get('/', initData, universalLoader);

//handle static resources
app.use(express.static(path.resolve(__dirname, '..', 'build')))

//if request skipped previous middlewares, path is not home one, and it is not path of static resource
app.use('/', (req, res, next) => {
    console.log("Request path different from root: " +  req.method + " " + req.url);
    next();
},
initData,
universalLoader) ;


module.exports = app;*/
