const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.payload,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      const todo = state[action.payload]

      return Object.assign([...state], {
        [action.payload]: { ...todo, completed: !todo.completed }
      })
    default:
      return state
  }
}

export default todos
