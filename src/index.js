import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/styles/global.css';
import App from 'App';
import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter
} from 'react-router-dom'

const initialData = window.__INITIAL_DATA__;
console.log("Initial data: " + initialData);

delete window.__INITIAL_DATA__;

const render = (Component) => {
    ReactDOM.render(
        <BrowserRouter>
            <Component initialData={initialData}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

render(App);
//registerServiceWorker();
