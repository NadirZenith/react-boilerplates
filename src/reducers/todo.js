import * as todoActions from '../constants/todo';

const initialState = [];

export function visibilityFilter(state = 'SHOW_ALL', action) {
    switch (action.type) {
        case todoActions.SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

export function todos(state = initialState, action) {
    switch (action.type) {
        case todoActions.SET_TODOS:
            return action.todos

        case todoActions.ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]

        case todoActions.TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.index)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )

        case todoActions.REMOVE_TODO:
            state.splice(action.index, 1);

            return state
        default:
            return state
    }
}
