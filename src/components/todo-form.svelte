<form class="flex flex-col items-center m-4">
  <Input class="{ $todoForm.hasError('todo.required') ? 'm-4 mb-0': 'm-4' }" 
  type="text" 
  placeholder="Enter todo...."
  color="{ $todoForm.hasError('todo.required') ? 'red' : 'base' }"
  bind:value={$todo.value} 
  />

  {#if $todoForm.hasError('todo.required')}
    <Helper color="red" helperClass='mb-4'>*Todo is required.</Helper>
  {/if}
  
  <Dropdown dropdownOptions="{ todoStatus }" dropdownName="{ dropdownName }" on:dropdownChange={ handleDropdownChange } />
  <Button class="m-4" type="submit" disabled={!$todoForm.valid} on:click={ handleTodoSave }>Save</Button>
</form>

<script lang="ts">
  import { Input, Label, Helper, Button } from 'flowbite-svelte';

  import { form, field } from 'svelte-forms';
  import { required } from 'svelte-forms/validators';

  import Dropdown from './dropdown.svelte'

  // variables
  let dropdownName = 'high'
  const todoStatus: string[] = ['high', 'medium', 'low']
  const todo = field('todo', '', [required()]);
  const todoForm = form(todo);

  // functions
  const handleDropdownChange = ({ detail }: Record<string, any>) => {
    console.log(detail)
  }

  const handleTodoSave = () => {
    todoForm.subscribe((res) => {
      console.log(res.summary)
    })
    setRandomPriority()
    todoForm.reset()
  }

  const setRandomPriority = () => {
    const random = Number((Math.random() * 10).toFixed(0))
    if(random > todoStatus.length - 1) {
      setRandomPriority()
    } else {      
      dropdownName = todoStatus[random]
    }

  }
</script>
