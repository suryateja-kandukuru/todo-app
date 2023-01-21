<Button><Chevron>{ selectedDropdown ? selectedDropdown : dropdownName }</Chevron></Button>
<Dropdown>
  {#each dropdownOptions as item}
    <DropdownItem on:click={() => { handleClick(item) }}>{item}</DropdownItem>
	{/each}
</Dropdown>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte'

  // props
  export let dropdownName: any
  export let dropdownOptions: string[]
  let selectedDropdown = ''
  const dispatch = createEventDispatcher();


  const handleClick = (item: any) => {
    selectedDropdown = item
    dispatch('dropdownChange', item)
  }


</script>
