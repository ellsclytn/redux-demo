export const updateTodos = todos => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(todos), 1000)
  })
}
