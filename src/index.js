import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/styles/global.css';
import App from 'App';
import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter
} from 'react-router-dom'

const render = (Component) => {
    ReactDOM.render(
        <BrowserRouter>
            <Component />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

render(App);
registerServiceWorker();
