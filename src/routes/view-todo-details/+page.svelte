<script lang="ts">
    import { page } from '$app/stores';
    const urlParams: any = $page.url.searchParams
</script>

<div class="text-2xl">Here are the details of todo id: {urlParams.get('id')}</div>
<ul class="mt-4">
  <li>Id: {urlParams.get('id')}</li>
  <li>Todo: {urlParams.get('todo')}</li>
  <li>Priority : {urlParams.get('priority')}</li>
</ul>