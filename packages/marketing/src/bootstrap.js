import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
const mount = (el) => {
    ReactDom.render(<App />, el);
}

if(process.env.NODE_ENV === 'development'){
    const markRoot = document.querySelector('#_marketing-dev-root');
    if(markRoot){
        mount(markRoot);
    }
}

export { mount }