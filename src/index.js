import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/styles/global.scss';
import App from 'components/layout/App';
import { BrowserRouter } from 'react-router-dom'

console.log("Client ssd");
//require('assets/img/blue.jpg');

/*const initialData = window.__INITIAL_DATA__;


delete window.__INITIAL_DATA__;*/

const render = (Component) => {
    ReactDOM.render(
        <BrowserRouter>
            <Component initialData={{}}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

render(App);
