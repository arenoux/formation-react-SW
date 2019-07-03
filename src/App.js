import React, { Component } from 'react';
import Todo from './Todo';
import './App.css';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import { addTodo, filterTodo, checkTodo, removeTodo } from './actions/todoList';

export class App extends Component {
  render() {
    return (
      <div>
        <header className="bg-dark">
          <nav className="navbar bg-dark">
            <span className="navbar-brand text-secondary">TODO LIST</span>
          </nav>
        </header>
        <div className="todolist">
          <AddTodo handleAdd={this.props.addTodo} />
          {this.props.tasks.map((todo, index) => {
            return (
              <Todo
                name={todo.name}
                index={index}
                key={index}
                done={todo.done}
                handleCheck={this.props.checkTodo}
                handleDelete={this.props.removeTodo}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.todoList.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
    removeTodo: todo => dispatch(removeTodo(todo)),
    checkTodo: todo => dispatch(checkTodo(todo)),
    filterTodo: todo => dispatch(filterTodo(todo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
