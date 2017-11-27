import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from './Constants'

const initialState = {
    title: 'React Boilerplates todo',
    visibilityFilter: SHOW_ALL,
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
  <App title={initialState.title} todos={initialState.todos} visibilityFilter={initialState.visibilityFilter}/>,
  document.getElementById('app')
);

module.hot.accept();
