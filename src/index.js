import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import IP from './IP';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reducers from './reducers/index';


const store = createStore(
    reducers,
    composeWithDevTools( applyMiddleware(thunk) )
);


ReactDOM.render(
    <React.StrictMode>
        <Provider store={ store }>
            <IP />
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
