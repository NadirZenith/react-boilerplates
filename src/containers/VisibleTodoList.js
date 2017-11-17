import { connect } from 'react-redux'
import * as todoActionsFilters from '../constants/todo';
import * as actions from '../actions'

// import getVisibleTodos from '../reducers'

import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case todoActionsFilters.SHOW_ALL:
            return todos
        case todoActionsFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case todoActionsFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(actions.toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList