<script>
  import Cameras from "../../lib/Cameras.svelte";
  export let data;
  const { error, message } = data;
</script>

{#if error}
  <p>{error}</p>
{:else if message}
  <p>{message}</p>
{:else}
  <Cameras {data} />
{/if}


