import axios from 'axios';
import {GET_TODOS, ADD_TODO, DEL_TODO, TOGGLE_TODO} from './types';


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

export const delTodo = (id) => dispatch => {
    axios.delete(`/api/todos/${id}`).then(res => {
        dispatch({
            type: DEL_TODO,
            payload: id
        })
    })
}

export const toggleTodo = (id, todo) => dispatch => {
    axios.put(`/api/todos/${id}/`, todo).then(res => {
        dispatch({
            type: TOGGLE_TODO,
            payload: res.data
        })
    })
}