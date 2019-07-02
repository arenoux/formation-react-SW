import React, { Component } from 'react';
import Todo from './Todo';
import './App.css';
import AddTodo from './AddTodo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { name: 'Learn React', done: false },
        { name: 'Learn CSS', done: true },
        { name: 'Web development', done: true },
        { name: 'Add Confetti', done: false }
      ]
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(text) {
    const newTaskList = this.state.tasks.slice(0);
    newTaskList.push({ name: text, done: false });
    this.setState(() => {
      return {
        tasks: newTaskList
      };
    });
  }

  handleDelete(index) {
    const newTaskList = this.state.tasks.slice(0);
    delete newTaskList[index];
    this.setState(() => {
      return {
        tasks: newTaskList
      };
    });
  }

  handleCheck(index) {
    const newTaskList = this.state.tasks.slice(0);
    newTaskList[index].done = !newTaskList[index].done;
    this.setState(() => {
      return {
        tasks: newTaskList
      };
    });
  }

  render() {
    return (
      <div>
        <header className="bg-dark">
          <nav className="navbar bg-dark">
            <span className="navbar-brand text-secondary">TODO LIST</span>
          </nav>
        </header>
        <div className="todolist">
          <AddTodo handleAdd={this.handleAdd} />
          {this.state.tasks.map((todo, index) => {
            return (
              <Todo
                name={todo.name}
                index={index}
                key={index}
                done={todo.done}
                handleCheck={this.handleCheck}
                handleDelete={this.handleDelete}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
