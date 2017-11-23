import {combineReducers} from 'redux'
import {visibilityFilter, todos} from './todo'

export default combineReducers({visibilityFilter, todos})
