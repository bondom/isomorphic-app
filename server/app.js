const express = require('express');
const path = require('path');
const React = require('react');
const fs = require('fs')
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const {default: App} = require('../src/App');
const {default: render} = require('./render');

const app = express();

const filePath = path.resolve(__dirname, '..', 'build', 'index.html');


const universalLoader = function(req, res) {
    console.log("Request to server: " +  req.method + " " + req.url);

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('read err', err);
            return res.status(404).end()
        }
        const markup = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={{}}>
                <App/>
            </StaticRouter>
        );
        res.status(200).send(htmlData.replace('{{SSR}}', markup));
    });
};

//handle root url, if don't do this, page from build folder(just SPA) will be returned
app.get('/', universalLoader);

//handle static resources
app.use(express.static(path.resolve(__dirname, '..', 'build')))

//if request passed previous middlewares, path is not home one, and it is not path of static resource
app.use('/', (req, res, next) => {
    console.log("Request to server2: " +  req.method + " " + req.url);
    next();
},
universalLoader) ;


module.exports = app;