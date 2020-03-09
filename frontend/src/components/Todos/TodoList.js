import React, { Component } from "react";
import { connect } from "react-redux";
import { getTodos } from "../../actions/Todos";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBodyShown: true
    };
  }
  componentDidMount() {
    this.props.getTodos();
  }
  render() {
    return (
      <ul className="list-group" style={{padding:'0 20% 0 20%'}}>
        {this.props.todos.map(todo => (
          <li key={todo.id} className="list-group-item">
              <input type="checkbox" />
              {todo.name}
              <button className="btn btn-danger btn-sm float-right">X</button>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos
});

export default connect(mapStateToProps, { getTodos })(TodoList);
