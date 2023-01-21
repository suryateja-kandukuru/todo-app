<div class="layout-container w-full flex">
  <div class='h-full'><SideNav /></div>
  <div class="h-16 w-full absolute top-0 bg-blue-500 text-xl text-white pl-5 flex items-center">Svelte Todo</div>
</div>

<slot />

<script lang="ts">
  import SideNav from '../components/sidenav.svelte'

  import '../app.css'
  import "flowbite/dist/flowbite.css";

</script>