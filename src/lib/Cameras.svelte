<script>
  export let data;
  const { cameras, error, message } = data;

  console.log(cameras);
</script>

<section>
  {#each cameras as camera}
    <li>{camera.id}</li>
  {/each}
</section>
