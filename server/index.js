import React from 'react';
import express from 'express';
import App from '../src/components/layout/App.jsx';
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import reducer from 'reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { init } from '../src/actions/test';

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

        const store = createStore(reducer, applyMiddleware(thunk));
        store.dispatch(init());

        const html = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={{}}>
                    <App/>
                </StaticRouter>
            </Provider>
        );
        const replacedHtmlData = htmlData
            .replace('{{html}}', html)
            .replace(/__PRELOADED_STATE__PLACEHOLDER__/g, JSON.stringify(store.getState()).replace(/</g,'\\u003c'));
/*            .replace('{{META}}', meta);*/
        res.status(200).send(replacedHtmlData);
    });
});

app.listen(6060, () => {
    console.log("Listening on port 6060");
});
