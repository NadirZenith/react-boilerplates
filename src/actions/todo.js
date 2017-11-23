import * as todoActions from '../constants/todo';

let nextTodoId = 0

export const addTodo = todo => {
    return {
        type: todoActions.ADD_TODO,
        id: nextTodoId++,
        text: todo
    };
};

export const toggleTodo = index => {
    return {
        type: todoActions.TOGGLE_TODO,
        index: index
    };
};

export const setVisibilityFilter = filter => {
  return {
    type: todoActions.SET_VISIBILITY_FILTER,
    filter
  }
}
