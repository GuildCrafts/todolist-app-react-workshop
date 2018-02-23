import React, { Component } from 'react'

export default class NewTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {body: ''}
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event) {
    console.log('called onInputChange')
    this.setState({body: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault()
    console.log('submitting form', this);
    this.props.onFormSubmit(this.state.body)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({body: ''})
  }

  render() {
    console.log('renrendering NewTodo')
    return (
      <form onSubmit={this.onFormSubmit}>
        <input name="body"
               value={this.state.body}
               type="text"
               onChange={this.onInputChange} />
        <button className="btn btn-primary">Create!</button>
      </form>
    )
  }
}
