const express = require('express');
const path = require('path');
const React = require('react');
const fs = require('fs')
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const {default: App} = require('../src/App');
const {default: render} = require('./render'); //TODO: delete or adopt


import { getQAs } from '../src/actions/qa';
import serialize from 'serialize-javascript'; //to prevent XSS attacks

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
    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('read err', err);
            return res.status(404).end()
        }

        const initialData = res.locals.initialData;
        const markup = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={{}}>
                <App initialData={initialData}/>
            </StaticRouter>
        );
        const replacedHtmlData = htmlData.replace('{{SSR}}', markup).replace(/__INITIAL_DATA__PLACEHOLDER__/g, serialize(initialData));
        res.status(200).send(replacedHtmlData);
    });
};

//if we don't want to use ssr,
//just ensures that refreshing pages with paths different from root one will return page
/*app.get('/!*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});*/


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


module.exports = app;