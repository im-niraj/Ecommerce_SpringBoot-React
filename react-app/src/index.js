import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <Provider store={store}>
        {/* <React.StrictMode> */}
        <App />
        {/* </React.StrictMode> */}
    </Provider>
);
