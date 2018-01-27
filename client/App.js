import React from "react"
import TodoApp from "./TodoApp/TodoApp"
import Dev from "./Dev";

class App extends React.Component {

    render() {
        return (
            <div>
                <TodoApp {...this.props.todo} />
                {!this.props.debug ? null : <Dev />}
            </div>
        )
    }
}

export default App
