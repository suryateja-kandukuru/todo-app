<Sidebar>
  <SidebarWrapper divClass="h-screen bg-blue-500 pt-16">
    <SidebarGroup>
      {#each SideNavList as item }
      <SidebarItem bind:label="{ item.name }">
      </SidebarItem>
      {/each}
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>

<script>
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
  import { SideNavList } from '../constants/sidebar';
  let spanClass = 'flex-1 ml-3 whitespace-nowrap';
</script>

<style lang="scss">

</style>