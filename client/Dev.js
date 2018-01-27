import React from "react"
import axios from "axios"

const API = 'https://5a6b9ab78bdfbe0012adc1e7.mockapi.io/api/v1/todos';

const getTodos = () => {

    return axios.get(API);

    // return axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100');
}

class Dev extends React.Component {
    constructor(props) {
        super(props)

    }

    axiosTest = (event) => {
        alert('axios test')
    }


    render() {
        return (
            <div>
                <button onClick={this.axiosTest}>axios test</button>
                <button onClick={getTodos}>axios test2</button>
            </div>
        )
    }
}

export default Dev
