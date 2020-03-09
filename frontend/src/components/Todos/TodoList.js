import React, { Component } from "react";
import { connect } from "react-redux";
import { getTodos} from "../../actions/Todos";
import TodoItem from './TodoItem';

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
            <TodoItem todoItem={todo} key={todo.id}/>
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
