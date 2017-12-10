import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import 'assets/styles/global.scss';
import App from 'components/layout/App';
import { BrowserRouter } from 'react-router-dom'
import reducer from 'reducers';

//experimental autobinding: https://babeljs.io/docs/plugins/transform-class-properties/


const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(thunk)));

const render = (Component) => {
    hydrate(
        <Provider store={store}>
            <BrowserRouter>
                <Component initialData={{}}/>
            </BrowserRouter>
        </Provider>,
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
