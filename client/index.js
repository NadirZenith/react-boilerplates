import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SHOW_ALL } from './TodoApp/Constants'

const initialState = {
    todo: {
        title: 'React Boilerplates todo',
        visibilityFilter: SHOW_ALL,
        term: 'go swim',
        todos: [],
    },
    debug: 1
}

ReactDOM.render(
  <App {...initialState}/>,
  document.getElementById('app')
);

module.hot.accept();
