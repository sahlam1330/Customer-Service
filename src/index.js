import React from 'react';
import ReactDom from 'react-dom';
import Main from "./Main";
import './index.css';





const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Main/>
    </React.StrictMode>
);
