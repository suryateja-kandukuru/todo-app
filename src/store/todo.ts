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

export const updateTodo = (todo: any)  => {
  console.log('sss', todo)
  todos.update((todos: any) => {
    const index=  todos.findIndex((ele: any) => (ele.id) == todo.id)
    console.log('res', todos[index])
    if(index >=0) {
      todos[index] = todo
    }
    return todos
  })
}