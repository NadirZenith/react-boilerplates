import React from "react"
import TodoApp from "./TodoApp"

import {SHOW_ALL} from './Constants'

const initialState = {
    title: 'React Boilerplates todo',
    visibilityFilter: SHOW_ALL,
    term: '',
    todos: [
        {
            id: 1,
            completed: true,
            text: 'do this tomorrow'
        },
        {
            id: 2,
            completed: false,
            text: 'do this today'
        }
    ],
    debug: 0
}

class App extends React.Component {

    render() {
        return (
            <TodoApp {...initialState} />
        )
    }
}

export default App
