import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      newTask: ''
    };
  }

  handleAdd(event) {
    this.props.handleAdd(this.state.newTask);
    event.preventDefault();
    this.setState({ newTask: '' });
  }

  handleChange(titi) {
    this.setState({
      newTask: titi.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleAdd}>
        <input
          type="text"
          name="newTask"
          onChange={this.handleChange}
          onSubmit={this.handleAdd}
          value={this.state.newTask}
        />
      </form>
    );
  }
}

export default AddTodo;
