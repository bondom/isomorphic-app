import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/styles/global.scss';
import App from 'components/layout/App';
import { BrowserRouter } from 'react-router-dom'


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


if(module.hot) {
    module.hot.accept('components/layout/App', () => {
        const NextApp = require('components/layout/App').default;
        render(NextApp);
    })
}
