import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default function Todos() {
    return (
        <div>
            <div className='container'>
                <h1><strong>ToDos</strong></h1>
            </div>
            <div>
                <AddTodo />
                <br />
                <TodoList />
            </div>
        </div>
    )
}
