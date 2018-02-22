import React, { Component } from 'react'

export default class TodosList extends Component {
  render() {
    // console.log('props:', this.props)
    let todosList = Object.values(this.props.todos)
    let todosJSX = todosList.map(todo => {
      return (
        <div key={todo.id}>
          {todo.body} <button className="btn btn-primary">Complete!</button>
        </div>
      )
    })
    return (
      <div>
        {todosJSX}
      </div>
    )
  }
}


// Real DOM
// <div key=1>
//   Buy groceries <button>Complete</button>
// </div>
// <div key=2>
//   Buy fuel <button>Complete</button>
// </div>




// Virtual DOM
// <div key=1>
//   Buy groceries!! <button>Complete</button>
// </div>
// <div key=2>
//   Buy fuel <button>Complete</button>
// </div>


// component :: function
// props :: arguments

// function greeting(name) {
//   return 'Hello ' + name
// }
//
// greeting('punit')
