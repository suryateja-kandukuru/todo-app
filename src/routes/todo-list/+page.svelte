<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch } from 'flowbite-svelte';
  import { ButtonGroup, Button } from 'flowbite-svelte';
  import { goto } from '$app/navigation'
  import { removeTodo, todos } from '../../store/todo';
  let searchTerm = '';
  $: filteredItems = $todos.filter(
    (item: any) => item?.todo?.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );

  const handleEdit = (id: number) => {
    goto(`/add-todo/${id}`)
  }

  const handleDetails = (item: any) => {
    goto(`/view-todo-details?id=${item.id}&todo=${item.todo}&priority=${item.priority}`)
  }
</script>

<TableSearch placeholder="Search by maker name" hoverable={true} bind:inputValue={searchTerm}>
  <TableHead>
    <TableHeadCell>ID</TableHeadCell>
    <TableHeadCell>Name</TableHeadCell>
    <TableHeadCell>Todo</TableHeadCell>
    <TableHeadCell>Actions</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    {#each filteredItems as item}
      <TableBodyRow>
        <TableBodyCell>{item.id}</TableBodyCell>
        <TableBodyCell>{item.todo}</TableBodyCell>
        <TableBodyCell>{item.priority}</TableBodyCell>
        <TableBodyCell>
          <ButtonGroup>
            <Button on:click={() => handleEdit(item.id)}>Edit</Button>
            <Button on:click={() => handleDetails(item)}>View Details</Button>
            <Button on:click={() => removeTodo(item.id)}>Delete</Button>
          </ButtonGroup>
        </TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</TableSearch>

