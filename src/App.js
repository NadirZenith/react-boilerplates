import React from 'react'
// import Footer from './Footer'
// import AddTodo from '../containers/AddTodo'
import TodoList from './TodoList'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todos: props.todos}
        this.title = props.title
        this.handleTodoClick = this.handleTodoClick.bind(this);
    }

    handleTodoClick(id) {

        const remainder = this.state.todos.filter((todo) => {
            if (todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({todos: remainder});
        // alert(todo);
        // console.log(event)
    }

    render() {
        return (
            <div>
                <div>{this.title}</div>
                {/*<AddTodo />*/}
                <TodoList todos={this.state.todos} onTodoClick={this.handleTodoClick}/>
                {/*<Footer />*/}
            </div>
        );
    }
}

export default App
