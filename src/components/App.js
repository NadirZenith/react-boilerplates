import React from 'react'
// import Footer from './Footer'
// import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = (props) => (
    <div>
        <div>{props.title}</div>
        {/*<AddTodo />*/}
        <VisibleTodoList />
        {/*<Footer />*/}
    </div>
)

export default App