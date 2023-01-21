<div class="flex flex-col items-center">
  <div class="text-2xl">Add todo here...</div>
  <TodoForm on:formValue={(e) => addTodo(e.detail)}/>
  {JSON.stringify($todos)}
</div>

<script lang="ts">
  import TodoForm from '../../components/todo-form.svelte'
  import { addTodo, todos } from '../../store/todo';


</script>
