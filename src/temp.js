const express = require('express');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const app = express();
const {default: App} = require('./App');
const {default: render } = require('./render');
app.use(express.static(path.join(__dirname, 'build')));


//console.log("Render: " + render('asd'));


app.use(function(req, res) {
    const markup = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={{}}>
            <App/>
        </StaticRouter>
    );
    //const markup = ReactDOMServer.renderToString(ReactEl);
    res.status(200).send(render(markup));

});

module.exports = app;