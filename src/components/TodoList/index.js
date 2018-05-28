import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../ducks/actions'
import Todo from '../Todo'

const mapStateToProps = ({ todos }) => ({
  todos
})

const mapDispatchToProps = {
  toggleTodo
}

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map((todo, id) => (
      <Todo key={id} {...todo} onClick={() => toggleTodo(id)} />
    ))}
  </ul>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
