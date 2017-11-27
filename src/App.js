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
    this.todos = props.todos
    this.handleTodoClick = this.handleTodoClick.bind(this)
    this.handleFilterClick = this.handleFilterClick.bind(this)
  }

  // componentDidMount(){
  //   this.handleFilterClick(SHOW_ALL)
  // }

  handleTodoClick(id) {

    const remainder = this.state.todos.filter((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })

    this.setState({todos: remainder})
  }

  handleFilterClick(filter) {
    var remainder = this.todos
    switch (filter) {
      case SHOW_COMPLETED:
        remainder = remainder.filter(t => t.completed)
        break
      case SHOW_ACTIVE:
        remainder = remainder.filter(t => !t.completed)
        break
      case SHOW_ALL:
      default:
        // show all
    }

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
