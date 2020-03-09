import React, { Component } from "react";
import { connect } from "react-redux";
import { getTodos } from "../../actions/Todos";

export class TodoList extends Component {
  componentDidMount() {
    this.props.getTodos();
  }
  render() {
    return (
      <div className="container">
        <h1>Todos</h1>
        <ul className="list-group">
          {this.props.todos.map(todo => (
            <li key={todo.id} className="list-group-item">
              <input type="checkbox" />
              {'  '}
              {todo.name}
              <button className="btn btn-danger btn-sm float-right">X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(mapStateToProps, { getTodos })(TodoList);
