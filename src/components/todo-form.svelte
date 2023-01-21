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

{#if showToast}
<Toast simple={true} position="top-right">
  <svelte:fragment slot="icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
  </svelte:fragment>
  Todo saved to store.
</Toast>
{/if}


<script lang="ts">
  import { Input, Helper, Button, Toast } from 'flowbite-svelte';

  import { form, field } from 'svelte-forms';
  import { required } from 'svelte-forms/validators';

  import Dropdown from './dropdown.svelte'

  // variables
  let dropdownName = 'high'
  let showToast = false

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
    toggleToast()
  }

  const toggleToast = () => {
    showToast = true
    setTimeout(() => {
      showToast = false
    }, 2000)
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
