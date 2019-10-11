import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import thunk from 'redux-thunk';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const store = createStore()

ReactDOM.render(
    <Provider>
        <App />
    </Provider>, 
    document.getElementById("root")
);
