<script>
  import IncidentControl from "/src/lib/IncidentControl.svelte";

  export let data;
  const { disasters, error } = data;
</script>

<main>
  <IncidentControl />
  <section id="container">
    <header>
      <h1>My Incidents</h1>
      <p class="subtitle">All incidents where you are the controller</p>
    </header>

    {#if error}
      <p class="error">{error}</p>
    {:else if disasters.length === 0}
      <p>No disasters reported yet.</p>
    {:else}
      <ul class="disaster-list">
        {#each disasters as disaster}
          <li class="disaster-card">
            <h2>{disaster.title}</h2>
            <p><strong>Type:</strong> {disaster.type}</p>
            <p><strong>Status:</strong> {disaster.status}</p>
            <p><strong>Severity:</strong> {disaster.severity}</p>
            <p><strong>Location:</strong> {disaster.location}</p>
            <p><strong>Description:</strong> {disaster.description}</p>
          </li>
        {/each}
      </ul>
    {/if}
  </section>
</main>

<style>
  header {
    background-color: white;
    padding: 1em;
    border-bottom: 1px solid rgb(182, 164, 164);
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
  header h1 {
    font-size: 1.8rem;
    color: #333;
    margin: 0;
  }
  header .subtitle {
    color: #666666f1;
    font-size: 0.9rem;
    margin: 0;
  }
  main {
    display: grid;
    grid-template-columns: 1fr 2.3fr;
    height: 100%;
  }
  #container {
    background-color: rgba(255, 255, 255, 0.5);
    overflow-x: hidden;
    height: 85vh;
  }

  header h1 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  .error {
    color: #444;
    font-weight: bold;
    text-align: center;
  }

  .error {
    color: #e53e3e;
  }

  .disaster-list {
    list-style: none;
  }

  .disaster-card {
    border: 1px solid #e2e8f0;
    padding: 1rem;
    margin-bottom: 1.5rem;
    border-radius: 6px;
    background-color: #f9f9f9;
    transition: background-color 0.2s ease;
  }

  .disaster-card:hover {
    background-color: #f1fdf1;
  }

  .disaster-card h2 {
    margin-top: 0;
    font-size: 1.2rem;
    color: #2f855a;
  }

  .disaster-card p {
    margin: 0.25rem 0;
  }
</style>
