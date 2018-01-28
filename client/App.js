import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import TodoApp from "./TodoApp/TodoApp"
import Calculator from "./Calculator/Calculator"
import Dev from "./Dev";

const Home = () => {
    return (
        <p>Hello, navigate through routes</p>
    )
}

const NoMatch = () => {
    return (
        <p>.. Not found ..</p>
    )
}

class App extends React.Component {

    render() {

        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/todo'>Todo</Link></li>
                        <li><Link to='/calc'>Calc</Link></li>
                    </ul>

                    <hr/>

                    <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/todo' render={rProps => <TodoApp {...this.props.todo} />}/>
                            <Route path='/calc' render={rProps => <Calculator {...this.props.calc} />}/>
                            <Route component={NoMatch}/>
                            {!this.props.debug ? null : <Dev/>}
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
