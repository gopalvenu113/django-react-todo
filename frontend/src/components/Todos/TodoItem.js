import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { delTodo, toggleTodo } from "../../actions/Todos";

export class TodoItem extends Component {
  state = {
    isBodyShowing: false
  };
  onChange = todo => {
    (todo.is_completed = !todo.is_completed),
      this.props.toggleTodo(todo.id, todo);
  };
  onClick = () => {
    this.setState({
      isBodyShowing: !this.state.isBodyShowing
    });
  };
  render() {
    const todo = this.props.todoItem;
    return (
      <Fragment>
        <li
          className="list-group-item"
          id="list-item"
          style={this.textStyle()}
          onClick={() => {
            this.onClick();
          }}
        >
          <input
            type="checkbox"
            style={{ marginRight: "0.5em", transform: "scale(1.5)" }}
            checked={todo.is_completed}
            onChange={() => {
              this.onChange(todo);
            }}
          />
          <span className='todo-body' style={this.textStyle()}>{todo.body}</span>
          {todo.name}
          <button
            className="btn btn-danger btn-sm float-right"
            onClick={() => {
              this.props.delTodo(todo.id);
            }}
          >
            X
          </button>
        </li>
      </Fragment>
    );
  }
  textStyle = () => {
    if (this.props.todoItem.is_completed) {
      return {
        textDecoration: "line-through",
        fontSize: "1.3em"
      };
    }
    return {
      fontSize: "1.5em"
    };
  };
}

export default connect(null, { delTodo, toggleTodo })(TodoItem);
