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
    <h1>🛣️ Road Conditions Page</h1>

    <select bind:value={selectedCameraId}>
      <option value="" disabled>Select a camera</option>
      {#each cameras as camera}
        <option value={camera.id}>{camera.name}</option>
      {/each}
    </select>

    <div>
      {#if selectedCamera}
        <img
          src={selectedCamera.imageUrl}
          alt={selectedCamera.name || "Image Loading"}
        />
        <p>{selectedCamera.description}</p>
      {:else}
        <img 
        src={cameras[0].imageUrl}
        alt={cameras[0].name || "Image Loading"}
        />
        <p>{cameras[0].description}</p>
        />
      {/if}
    </div>
</main>

<style>
  select {
    padding: 1em;
  }
  main {
    background-color: rgba(1, 100, 1, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    color: white;
    padding: 1em;
  }
</style>
