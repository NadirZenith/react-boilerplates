import React from 'react'
import Footer from './Footer'
// import AddTodo from '../containers/AddTodo'
import TodoList from './TodoList'
import {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} from './Constants'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visibilityFilter: props.visibilityFilter,
      todos: props.todos
    }
    this.title = props.title
    this.handleTodoClick = this.handleTodoClick.bind(this)
    this.handleFilterClick = this.handleFilterClick.bind(this)
  }

  handleTodoClick(id) {

    const remainder = this.state.todos.filter((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    this.setState({todos: remainder})
    // alert(todo);
    // console.log(event)
  }

  handleFilterClick(filter) {
    const remainder = this.state.todos.filter((todo) => {
      if (filter === SHOW_ALL) {
        return todo
      }
      if (filter === SHOW_COMPLETED && todo.completed === true) {
        return todo
      }
      if (filter === SHOW_ACTIVE && todo.completed === false) {
        return todo
      }
    })

    this.setState({
      visibilityFilter: filter,
      todos: remainder
    })
  }

  render() {
    return (
        <div>
          <div>{this.title} - {this.state.visibilityFilter}</div>
          {/*<AddTodo />*/}
          <TodoList todos={this.state.todos} onTodoClick={this.handleTodoClick}/>
          <Footer currentFilter={this.state.visibilityFilter} onFilterClick={this.handleFilterClick}/>
        </div>
    )
  }
}

export default App
