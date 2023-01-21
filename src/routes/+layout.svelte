<div class="layout-container w-full flex">
  <div class='h-full'><SideNav /></div>
  <div class="h-16 w-full absolute top-0 bg-blue-500 text-xl text-white pl-5 flex items-center cursor-pointer">
    <a href='/'>Svelte Todo</a>
  </div>
  <div class="w-full pt-20 pl-4">
    <slot />
  </div>

</div>


<script lang="ts">
  import SideNav from '../components/sidenav.svelte'

  import '../app.css'
  import "flowbite/dist/flowbite.css";

</script>