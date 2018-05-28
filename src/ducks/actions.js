import { updateTodos } from '../services/todoService'

export const addTodo = text => {
  return (dispatch, getState) => {
    const { todos } = getState()

    const newTodo = {
      completed: false,
      text
    }

    updateTodos([...todos, newTodo])
      .then(updatedTodos =>
        dispatch({
          type: 'UPDATE_TODOS',
          payload: updatedTodos
        })
      )
      .catch(() => {
        console.error('Something went wrong, we should handle it.')
      })
  }
}

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  payload: filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  payload: id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
