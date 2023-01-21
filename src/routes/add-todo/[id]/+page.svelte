<div class="flex flex-col items-center">
  <div class="text-2xl">Add todo here...</div>
  <TodoForm on:formValue={handleTodo} 
  editMode={editMode}
  id={$page.params.id} />
</div>

<div class="text-red-500">{ $page.params.id }</div>

<script lang="ts">
  import TodoForm from '../../../components/todo-form.svelte'
  import { addTodo, updateTodo } from '../../../store/todo';

  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let editMode = false

  onMount(() => {
    editMode = Number($page.params.id) > 0
  })

  const handleTodo = (e: any) => {
    console.log(e)
    if(e.detail.idEditMode) {
      updateTodo(e.detail.formData)
      goto('/todo-list')
    } else {
      addTodo(e.detail.formData)
    }

  }
</script>
