import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import thunk from 'redux-thunk';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from "./state/reducers";

const combinedReducer = combineReducers({
    
    formValues: reducers.formReducer,
    serverProperties: reducers.serverReducer,
});

const store = createStore(
    combinedReducer,
    {},
    compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, 
    document.getElementById("root")
);
