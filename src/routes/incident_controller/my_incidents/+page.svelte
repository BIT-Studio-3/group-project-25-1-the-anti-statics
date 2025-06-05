<script>
  import IncidentControl from "/src/lib/IncidentControl.svelte";
import { isDark } from "../../stores/theme.js";
  export let data;
  const { disasters, error, getError } = data;

  let selectedDisasterName = "";
  let disasterId = "";
  let filteredDisasters = disasters;

  const handleInput = () => {
    const query = selectedDisasterName.toLowerCase().trim();
    filteredDisasters = query
      ? disasters.filter((d) => d.title.toLowerCase().includes(query))
      : disasters;

    const exactMatch = disasters.find((d) => d.title.toLowerCase() === query);
    disasterId = exactMatch ? exactMatch.id : "";
  };
</script>

<main class:dark={$isDark}>
  <IncidentControl />
  <section id="container">
    <header>
      <h1>My Incidents</h1>
      <p class="subtitle">All incidents where you are the controller</p>
    </header>

    {#if error}
      <div class="error-message">
        <p>{error}</p>
      </div>
    {:else if getError}
      <div class="error-message">
        <p>{getError}</p>
      </div>
    {:else}
      <div class="search-bar">
        <input
          type="text"
          placeholder="Search disaster by title..."
          bind:value={selectedDisasterName}
          on:input={handleInput}
        />
      </div>

      {#if filteredDisasters.length > 0}
        <ul class="disaster-list">
          {#each filteredDisasters as disaster}
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
      {:else}
        <div class="error-message">
          <p>No matching disasters.</p>
        </div>
      {/if}
    {/if}
  </section>
</main>

<style>
  .search-bar {
    display: flex;
    padding: 1em;
    justify-content: center;
    background-color: rgba(141, 214, 167, 0.5);
  }

  .search-bar input {
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
  }

  .error-message {
    background-color: #f56565;
    color: white;
    padding: 0.8rem;
    margin: 1rem auto;
    border-radius: 4px;
    max-width: 800px;
    text-align: center;
    font-weight: 600;
  }
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
    display: flex;
    flex-direction: column;
  }

  header h1 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  .disaster-list {
    list-style: none;
    background-color: rgba(0,0,0,0.5);
    padding: 1.2em;
    overflow-y: auto;
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

  :global(.dark) #container {
  background-color: rgba(0, 0, 0, 0.4);
}

:global(.dark) header {
  background-color: rgba(20, 20, 20, 0.8);
  border-color: #333;
}

:global(.dark) header h1,
:global(.dark) .subtitle,
:global(.dark) .disaster-card h2,
:global(.dark) .disaster-card p {
  color: white;
}

:global(.dark) .search-bar {
  background-color: rgba(30, 30, 30, 0.7);
}

:global(.dark) .search-bar input {
  background-color: #1e1e1e;
  color: white;
  border: 1px solid #555;
}

:global(.dark) .disaster-card {
  background-color: #222;
  border: 1px solid #444;
}

:global(.dark) .disaster-card:hover {
  background-color: #2e2e2e;
}

:global(.dark) .error-message {
  background-color: #e53e3e;
  color: white;
}

@media (max-width: 1024px) {
  main {
    grid-template-columns: 1fr;
  }

  #container {
    height: auto;
    min-height: 500px;
  }

  .search-bar {
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }
}

@media (max-width: 768px) {
  header h1 {
    font-size: 1.5rem;
  }

  header .subtitle {
    font-size: 0.85rem;
  }

  .disaster-card {
    padding: 0.8rem;
  }

  .disaster-card h2 {
    font-size: 1rem;
  }

  .search-bar input {
    padding: 0.7rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  header {
    padding: 0.8rem;
  }

  .disaster-card p {
    font-size: 0.85rem;
  }

  .search-bar input {
    font-size: 0.9rem;
    padding: 0.6rem;
  }

  .error-message {
    font-size: 0.9rem;
    padding: 0.6rem;
  }
}
</style>
