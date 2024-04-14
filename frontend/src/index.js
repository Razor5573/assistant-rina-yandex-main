import ReactDOM from 'react-dom';
import { DeviceThemeProvider, SSRProvider } from '@salutejs/plasma-ui';
import GlobalStyle from './GlobalStyle';
import React from 'react'
import App from './App';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <DeviceThemeProvider>
        <SSRProvider>
            <BrowserRouter forceRefresh={true}>
                <App />
            </BrowserRouter>
            <GlobalStyle />
        </SSRProvider>
    </DeviceThemeProvider>,
    document.getElementById('root'),
);