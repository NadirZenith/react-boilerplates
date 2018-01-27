import React from "react"

class AddTodo extends React.Component {
    render() {
        return (
            <form className="AddTodo" onSubmit={this.props.onSubmit}>
                <input value={this.props.defaultTerm} onChange={this.props.onChange}/>
                <button>Submit</button>
            </form>
        )
    }
}

export default AddTodo
