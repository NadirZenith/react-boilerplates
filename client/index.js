import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { SHOW_ALL } from './TodoApp/Constants'

const initialState = {
    title: 'React Boilerplates todo',
    visibilityFilter: SHOW_ALL,
    term: '',
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
    ],
    debug: 0
}

ReactDOM.render(
  <App {...initialState}/>,
  document.getElementById('app')
);

module.hot.accept();
