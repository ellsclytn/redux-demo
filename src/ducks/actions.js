export const addTodo = text => ({
  type: 'ADD_TODO',
  payload: text
})

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
