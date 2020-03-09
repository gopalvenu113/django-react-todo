import React, { Component } from "react";
import {addTodo} from "../../actions/Todos";
import { connect } from "react-redux";

export class AddTodo extends Component {
  state= {
    name: "",
    body: ""
  };
  onSubmit = e => {
    e.preventDefault();
    const { name, body } = this.state;
    const todo = { name, body };
    this.props.addTodo(todo);
    this.setState({
      name: "",
      body: ""
    });
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Add Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              type="textbox"
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              placeholder="Todo Title"
            />
          </div>
          <div className="form-group">
            <input
              type="textArea"
              className="form-control"
              name="body"
              value={this.state.body}
              onChange={this.onChange}
              placeholder="Todo Description"
            />
          </div>
          <button type="submit" className="btn btn-secondary">
            AddTodo
          </button>
        </form>
        <br />
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
