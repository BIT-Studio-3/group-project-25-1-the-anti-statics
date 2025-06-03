<script>
  export let data;
  const { cameras } = data;
  console.log(cameras);
  let selectedCameraId = null;
  let selectedCamera = null;
  // Find the selected camera based on the ID
  $: selectedCamera = cameras.find((camera) => camera.id === selectedCameraId);
</script>

<main>
  <section>
    <h1>🛣️ Road Conditions Page</h1>

    <select bind:value={selectedCameraId}>
      <option value="" disabled>Select a camera</option>
      {#each cameras as camera}
        <option value={camera.id}>{camera.name}</option>
      {/each}
    </select>

    {#if selectedCamera}
      <div>
        <img
          src={selectedCamera.imageUrl}
          alt={selectedCamera.name || "Image Loading"}
        />
        <p>{selectedCamera.description}</p>
      </div>
    {/if}
  </section>
</main>

<style>
  main{
    background-color: rgba(1, 100, 1, 0.4);
    display: flex;
    justify-content: center;
  }
  h1{
    color: white;
    padding: 1em;
  }
</style>
