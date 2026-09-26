import React from 'react';
import ReactDOM from 'react-dom/client'

const parent = React.createElement('div', { id: 'parent' },
    React.createElement('div', { id: 'child' },
        "dfas", [React.createElement('h1', { id: 'h1-test', key: 'h1' }, " this is testing..."),
        React.createElement('h2', { id: 'h2-test' , key: 'h2' }, " this is h2 tag --")]
    ))
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root)
root.render(parent)