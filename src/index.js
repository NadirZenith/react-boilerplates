import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as actions from './actions';
import configureStore from './configureStore';

const initialState = {
    visibilityFilter: 'SHOW_ALL',
    todos: []
}

const store = configureStore(initialState)

console.log('initial state')
console.log(store.getState())

console.log('-----------------------------')
console.log('action add todo')
store.dispatch(actions.addTodo('Go to swimming pool'))
console.log(store.getState())

console.log('-----------------------------')
console.log('action add todo')
store.dispatch(actions.addTodo('Just do it'))
console.log(store.getState())

console.log('-----------------------------')
console.log('action toggle todo')
store.dispatch(actions.toggleTodo(0))
console.log(store.getState())

const title = 'React Boilerplates';

ReactDOM.render(
  <Provider store={store}>
    <div>{title}</div>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
