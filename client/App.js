import React from "react"
import TodoApp from "./TodoApp/TodoApp"

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
