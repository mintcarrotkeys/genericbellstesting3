import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {saveItem} from "./version";
import {checkTheme, swapTheme} from "./themeManager";

// TODO: PREFLIGHT: remove testing data

// let TESTDATA = ;
//
//
// saveItem('storedData', TESTDATA);

checkTheme();

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

//TODO: PREFLIGHT: serviceworker - turn off dev build first!
serviceWorkerRegistration.register();