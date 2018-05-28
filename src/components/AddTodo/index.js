import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../ducks/actions'

const mapDispatchToProps = {
  addTodo
}

class AddTodo extends Component {
  constructor () {
    super()

    this.state = {
      value: ''
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      value: target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    if (!this.state.value.trim()) {
      return
    }

    this.props.addTodo(this.state.value)

    this.setState({
      value: ''
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.value} onChange={this.handleChange} />
          <button type='submit'>Add Todo</button>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddTodo)
