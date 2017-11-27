import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

const state = {
    title: 'React Boilerplates todo',
    visibilityFilter: 'SHOW_ALL',
    todos: [
        {
            id: 1,
            completed: true,
            text: 'do this tomorrow'
        },
        {
            id: 2,
            completed: false,
            text: 'do this today'
        }
    ]
}

ReactDOM.render(
  <App title={state.title} todos={state.todos}/>,
  document.getElementById('app')
);

module.hot.accept();
