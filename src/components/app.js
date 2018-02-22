import React, { Component } from 'react';
import TodosList from './todos_list'
import NewTodo from './new_todo'

export default class App extends Component {
  render() {
    let todos = {
      1: {body: 'Buy Groceries', isComplete: false, id: 1},
      2: {body: 'Pick up kids', isComplete: false, id: 2}
    }
    return (
      <div>
        <TodosList todos={todos} />
        <NewTodo />
      </div>
    );
  }
}
