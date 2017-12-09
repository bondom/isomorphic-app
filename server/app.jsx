const express = require('express');
const path = require('path');
const React = require('react');
const fs = require('fs')
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const App = require('../src/components/layout/App.jsx').default;

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

