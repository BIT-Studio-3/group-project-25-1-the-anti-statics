<script>
  export let data;
  const { cameras, error, message } = data;

  console.log(cameras);
  let selectedCameraId = null;
  let selectedCamera = null;

  // Find the selected camera based on the ID
  $: selectedCamera = cameras.find(
    (camera) => camera.id === selectedCameraId
  );
</script>

<section>
  <h2 class="text-2xl font-bold mb-2">NZTA Traffic Camera</h2>

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
