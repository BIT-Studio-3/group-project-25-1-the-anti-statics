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

  <section id="camera-select">
    <h2>Select a camera:</h2>
    <select bind:value={selectedCameraId}>
      {#each cameras as camera}
        <option value={camera.id}>{camera.name}</option>
      {/each}
    </select>
  </section>

  <div>
    {#if selectedCamera}
      <img
        src={selectedCamera.imageUrl}
        alt={selectedCamera.name || "Image Loading"}
      />
      <p>{selectedCamera.description}</p>
    {:else}
      <img src={cameras[0].imageUrl} alt={cameras[0].name || "Image Loading"} />
      <p>{cameras[0].description}</p>
      />
    {/if}
  </div>
</main>

<style>
  #camera-select{
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em 3em 1em 3em;
  }
  #camera-select h2{
    color: #333;
  }
  select {
    padding: 1em 4em 1em 4em;
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
  h2 {
    color: white;
  }
</style>
