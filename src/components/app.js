import React, { Component } from 'react';
import TodosList from './todos_list'
import NewTodo from './new_todo'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: {
        1: {body: 'Buy Groceries', isComplete: false, id: 1},
        2: {body: 'Pick up kids', isComplete: false, id: 2}
      },
      lastTodoId: 2
    }
    this.addTodo = this.addTodo.bind(this)
  }

  addTodo(todoBody) {
    const todoId = this.state.lastTodoId + 1
    const newTodo = {body: todoBody, isComplete: false, id: todoId}
    const todos = Object.assign({}, this.state.todos, {[todoId]: newTodo})
    this.setState({todos, lastTodoId: todoId})
  }

  render() {
    return (
      <div>
        <TodosList todos={this.state.todos} />
        <NewTodo onFormSubmit={this.addTodo} />
      </div>
    );
  }
}
