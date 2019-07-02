import React, { Component } from 'react';
import Confetti from 'react-dom-confetti';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleDelete() {
    this.props.handleDelete(this.props.index);
  }

  handleCheck() {
    this.props.handleCheck(this.props.index);
  }

  render() {
    return (
      <div>
        <span className="input-group-text">
          {this.props.name}
          <i className="material-icons" onClick={this.handleCheck}>
            {this.props.done ? 'check_box' : 'check_box_outline_blank'}
          </i>
          <i className="material-icons" onClick={this.handleDelete}>
            delete
          </i>
        </span>
        <Confetti active={this.props.done} />
      </div>
    );
  }
}

export default Todo;
