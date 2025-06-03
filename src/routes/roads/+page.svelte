<script>
  export let data;
  const { cameras, message } = data;
  console.log(cameras);
  let selectedCameraId = null;
  let selectedCamera = null;
  // Find the selected camera based on the ID

  $: selectedCamera = cameras
    ? cameras.find((camera) => camera.id === selectedCameraId)
    : null;

  const getSelectedIndex = () =>
    cameras.findIndex((camera) => camera.id === selectedCameraId);

  const next = () => {
    const index = getSelectedIndex();
    if (index < cameras.length - 1) {
      selectedCameraId = cameras[index + 1].id;
    }
  };

  const back = () => {
    const index = getSelectedIndex();
    if (index > 0) {
      selectedCameraId = cameras[index - 1].id;
    }
  };
</script>

<main>
  <aside>
    <header>
      <h1><a href="/roads">🛣️ Road Conditions Page</a></h1>
    </header>
    <section id="camera-select">
      <h2>Select a camera:</h2>
      {#if cameras}
        <select bind:value={selectedCameraId}>
          {#each cameras as camera}
            <option value={camera.id}>{camera.name}</option>
          {/each}
        </select>
      {/if}
    </section>
  </aside>

  <section id="camera-section">
    <div id="camera-box">
      {#if message}
        <p>{message}</p>
      {:else if cameras && cameras.length > 0 && selectedCamera}
        <p>{selectedCamera.description}</p>
        <div>
          <img
            src={selectedCamera.imageUrl}
            alt={selectedCamera.name || "Image Loading"}
          />
        </div>
      {:else if cameras && cameras.length > 0}
        <!--Default selected camera-->
        <p>{cameras[0].description}</p>
        <div>
          <img
            src={cameras[0].imageUrl}
            alt={cameras[0].name || "Image Loading"}
          />
        </div>
      {/if}
      <section id="buttons">
        <button on:click={back}> Back </button>
        <button on:click={next}> Next </button>
      </section>
    </div>
  </section>
</main>

<style>
  #buttons {
    padding: 1em;
    display: flex;
    gap: 20px;
  }
  #buttons * {
    width: 100%;
    padding: 1em;
    background-color: white;
    font-weight: bolder;
    font-size: larger;
    transition:
      transform 0.3s,
      color 0.3s;
    border-radius: 0.5em;
    border: 4px solid green;
  }
  #buttons *:hover {
    cursor: pointer;
    transform: scale(1.05);
    background-color: green;
    color: white;
    border: 4px solid #333;
  }
  a {
    text-decoration: none;
    color: white;
  }
  h1 {
    transition:
      transform 0.3s,
      color 0.3s;
  }
  header:hover h1 {
    color: #333;
    transform: scale(1.1);
  }
  header:hover a {
    color: #333;
  }
  #camera-box div {
    background-color: rgb(255, 255, 255);
    border: 3px solid rgb(199, 202, 199);
    padding: 0.3em;
    overflow-x: auto;
    height: auto;
  }
  header {
    padding: 1em;
  }
  aside {
    background-color: rgba(1, 100, 1, 0.4);
    border-right: 4px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #camera-box p {
    font-weight: bold;
    font-size: x-large;
    padding: 0.2em 0.8em 1em 0em;
  }
  #camera-box img {
    display: inline-block;
    min-width: 100%;
    height: 100%;
  }
  #camera-box {
    background-color: rgb(216, 249, 237);
    border: 2px solid green;
    box-shadow: 10px 10px 7px;
    border-radius: 0.8em;
    padding: 2em;
  }
  #camera-section {
    padding: 3em;
    min-width: 30em;
  }
  #camera-select {
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em 3em 1em 3em;
    border-radius: 0.8em;
    box-shadow: 8px 8px 5px;
    margin: 1em;
  }
  #camera-select h2 {
    color: #333;
  }
  select {
    padding: 1em 4em 1em 4em;
  }
  main {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
  h1 {
    color: white;
    padding: 1em;
  }
  h2 {
    color: white;
  }
</style>
