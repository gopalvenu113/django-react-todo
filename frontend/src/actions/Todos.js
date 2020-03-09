import axios from 'axios';
import {GET_TODOS, ADD_TODO} from './types';


export const getTodos = () => dispatch => {
    axios.get('/api/todos').then(res => {
        dispatch({
            type: GET_TODOS,
            payload: res.data
        })
    })
}

export const addTodo = (todo) => dispatch => {
    axios.post('/api/todos/', todo).then(res => {
        dispatch({
            type: ADD_TODO,
            payload: res.data
        })
    })
}