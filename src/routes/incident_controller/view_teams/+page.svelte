<script>
  import IncidentControl from "../../../lib/IncidentControl.svelte";

  // Get resources data

  export let data;
  console.log(data);

  const { teams, getError, error } = data;
</script>

<main>
  <IncidentControl />
  <section id="container">
    <header>
      <h1>My Response Teams</h1>
      <p class="subtitle">
        Create and track your disaster response teams efficiently
      </p>
    </header>

    {#if teams}
      <div class="form-container">
        <h3>Resources</h3>
        <ul class="resource-list">
          {#each teams as team}
            <li>
              <strong>{team.id}</strong>: {team.disasterId}
            </li>
          {/each}
        </ul>
      </div>
    {:else if getError}
    <div class="error-message">
        <p>{getError}</p>
    </div>
    {:else if error}
      <div class="error-message">
        <p>{error}</p>
      </div>
    {/if}
  </section>
</main>

<style>
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

  .form-container {
    width: 100%;
    max-width: 700px;
    margin: 2em auto;
    background-color: white;
    padding: 2em;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-left: 4px solid #036d23;
  }

  h3 {
    text-align: center;
    margin-bottom: 1.5em;
    font-size: 1.5rem;
    color: #333;
    font-weight: 600;
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

  @media (max-width: 768px) {
    main {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
    }

    #container {
      height: auto;
      min-height: 500px;
      overflow-y: auto;
    }

    .form-container {
      padding: 1.5em;
      margin: 1em auto;
      width: 90%;
    }

    header h1 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.2rem;
    }

  }

  @media (max-width: 480px) {
    .form-container {
      padding: 1em;
      margin: 0.5em auto;
      border-left-width: 2px;
    }

    header {
      padding: 0.8em;
    }

    header h1 {
      font-size: 1.3rem;
    }

    header .subtitle {
      font-size: 0.8rem;
    }

    h3 {
      font-size: 1rem;
      margin-bottom: 1em;
    }

  }
</style>
