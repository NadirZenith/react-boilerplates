import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as actions from './actions';
import configureStore from './configureStore';
import App from './components/App'


// https://redux.js.org/docs/basics/UsageWithReact.html
// https://redux.js.org/docs/basics/ExampleTodoList.html
// https://www.robinwieruch.de/the-soundcloud-client-in-react-redux/
// https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react
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
        <App title={title} />
    </Provider>,
    document.getElementById('app')
);

module.hot.accept();
