import * as todoActions from '../constants/todo';

export function addTodo(todo) {
  return {
    type: todoActions.ADD_TODO,
    text: todo
  };
};

export function toggleTodo(index) {
  return {
    type: todoActions.TOGGLE_TODO,
    index: index
  };
};
