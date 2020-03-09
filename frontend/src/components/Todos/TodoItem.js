import React, { Component } from 'react';
import {connect} from 'react-redux';
import {delTodo, toggleTodo} from '../../actions/Todos';

export class TodoItem extends Component {
    onChange = (todo) => {
        todo.is_completed = !todo.is_completed,
        this.props.toggleTodo(todo.id, todo)
    }
    render() {
        const todo = this.props.todoItem
        return (
            <li className="list-group-item" style={this.textStyle()}>
              <input type="checkbox" checked={todo.is_completed} onChange={() => {this.onChange(todo)}}/>
              {todo.name}
              <button className="btn btn-danger btn-sm float-right" onClick= {() => {this.props.delTodo(todo.id)}}>X</button>
            </li>
        )
    }
    textStyle = () => {
        if(this.props.todoItem.is_completed){
            return {
                textDecoration: 'line-through',
            }
        }
    }
}


export default connect(null, {delTodo, toggleTodo})(TodoItem);