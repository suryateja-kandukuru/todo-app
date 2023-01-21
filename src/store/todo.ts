import { writable } from 'svelte/store'

export const todos = writable([
  {
  id: 1,
  todo: 'Try Svelte',
  priority: 'medium'
},
{
  id: 2,
  todo: 'Master React',
  priority: 'high'
}
])


// Functions for todos

export const addTodo = (todo: any) => {
  console.log('myXXX', todo)
  todos.update(todos => [...todos, todo])
}

export const removeTodo = (id: number) => {
  todos.update(todos => todos.filter((ele) => ele.id !== id))
}
