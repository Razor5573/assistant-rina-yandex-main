import ReactDOM from 'react-dom';
import GlobalStyle from './GlobalStyle';
import React from 'react'
import App from './App';
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
            <BrowserRouter forceRefresh={true}>
                <App />
                <GlobalStyle />
            </BrowserRouter>,
    document.getElementById('root'),
);