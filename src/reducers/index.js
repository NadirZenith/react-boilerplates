import { combineReducers } from 'redux'
import { visibilityFilter, todos } from './todo'

export default combineReducers({ visibilityFilter, todos })


// export default function(state = initialState, action) {
//   switch (action.type) {
//     case actionTypes.ADD_TODO:
//       return addTodo(state, action);
//   }
//   return state;
// }
//
// function addTodo(state, action) {
//   const { todo } = action;
//   return [ ...state, ...todo ];
// }



// ---------------------
