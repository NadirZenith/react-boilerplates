import axios from "axios"

const API = 'https://5a6b9ab78bdfbe0012adc1e7.mockapi.io/api/v1/todos';

const handleError = (error) => {
    console.warn(error);
    return null;
}

export const getTodos = (handler) => {
    return axios.get(API)
        .then(response => {
            handler(response.data)
        })
        .catch(handleError);
}

export const addTodo = (todo, handler) => {
    return axios.post(API, todo)
        .then(response => {
            handler(response.data)
        })
        .catch(handleError);
}

export const updateTodo = (todo, handler) => {
    return axios.put(API + '/' + todo.id, todo)
        .then(response => {
            handler(response.data)
        })
        .catch(handleError);
}

export const deleteTodo = (id, handler) => {
    return axios.delete(API + '/' + id)
        .then(response => {
            handler(response.data)
        })
        .catch(handleError);
}
