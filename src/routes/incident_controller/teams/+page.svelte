<script>
  import IncidentControl from "../../../lib/IncidentControl.svelte";

  // POST a team
  import { postTeam } from "../post-function/postTeam.js";

  // Local page variables
  let failed = "";
  let teams = "";
  let offline = "";

  let disasterId = "";

  const submitTeam = async (event) => {
    event.preventDefault();
    const {postError, info, error} = await postTeam({ disasterId });

    failed = postError
    teams = info
    offline = error

    console.log("Post error:", postError);
    console.log("Post info:", info);
    console.log("Error:", error);

    if (info) {
      alert("Team posted successfully!");

      teamInfo.disasterId = "";
    }
  };

  // Get disaster data
  let selectedDisasterName = "";
  let filteredDisasters = [];

  export let data;
  console.log(data);

  const { disasters } = data;

  const handleInput = () => {
    const query = selectedDisasterName.toLowerCase().trim();
    filteredDisasters = query
      ? disasters.filter((d) => d.title.toLowerCase().includes(query))
      : [];
  };

  const selectDisaster = (disaster) => {
    selectedDisasterName = disaster.title;
    disasterId = disaster.id;
    filteredDisasters = [];
  };
</script>

<main>
  <IncidentControl />
  <section id="container">
    <header>
      <h1>New Response Team</h1>
      <p class="subtitle">
        Create and track disaster response teams efficiently
      </p>
    </header>

    <div class="form-container">
      <form on:submit={submitTeam}>
        <h3>Create An Emergency Response Team</h3>

        <div class="form-group">
          <label for="disasterId"
            >Disaster Name <span class="required">*</span></label
          >
          <div class="input-wrapper">
            <input
              type="text"
              id="disasterId"
              bind:value={selectedDisasterName}
              placeholder="Start typing a disaster name..."
              on:input={handleInput}
              autocomplete="off"
              required
            />
            {#if filteredDisasters.length > 0}
              <ul class="autocomplete-list">
                {#each filteredDisasters as disaster}
                  <li on:click={() => selectDisaster(disaster)}>
                    {disaster.title}
                  </li>
                {/each}
              </ul>
            {/if}
            <span class="input-icon">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </span>
          </div>
        </div>

        <div class="button-wrapper">
          <button type="submit" class="form-button">Submit</button>
        </div>
      </form>
    </div>
    {#if failed}
      <div class="error-message">
        <p>{failed}</p>
      </div>
    {:else if offline}
      <div class="error-message">
        <p>{offline}</p>
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

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group label {
    display: block;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #444;
    font-size: 0.9rem;
  }

  .input-wrapper {
    position: relative;
  }

  .input-icon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #759671;
  }

  .required {
    color: #e53e3e;
  }

  .form-group input {
    width: 100%;
    padding: 0.8rem;
    font-size: 0.95rem;
    border: 2px solid #e2e8f0;
    border-radius: 4px;
    outline: none;
    box-sizing: border-box;
    transition: all 0.2s;
  }

  .form-group input:focus {
    border-color: #4caf50;
    box-shadow: 0 0 6px rgba(76, 175, 80, 0.5);
  }

  .button-wrapper {
    text-align: center;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid #eee;
  }

  .form-button {
    background-color: #138f19;
    color: white;
    padding: 0.8rem 1.8rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .form-button:hover {
    background-color: #45a049;
    transform: translateY(-0.5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
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

  .autocomplete-list {
    position: absolute;
    top: 100%; /* right below the input */
    left: 0;
    right: 0;
    background: white;
    border: 1px solid #ccc;
    border-top: none;
    max-height: 200px;
    overflow-y: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 10;
    border-radius: 0 0 6px 6px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .autocomplete-list li {
    padding: 10px 15px;
    cursor: pointer;
    font-size: 0.95rem;
    color: #333;
    transition: background-color 0.2s;
    border-bottom: 1px solid #eee;
  }

  .autocomplete-list li:last-child {
    border-bottom: none;
  }

  .autocomplete-list li:hover,
  .autocomplete-list li:focus {
    background-color: #e6f4ea; /* light green highlight */
    outline: none;
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

    .form-group {
      display: flex;
      flex-direction: column;
    }

    .form-group input {
      padding: 0.6rem;
      font-size: 0.9rem;
    }

    .form-button {
      padding: 0.6rem 1.5rem;
      font-size: 0.9rem;
      width: 100%;
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

    .form-group label {
      font-size: 0.85rem;
    }

    .form-group input {
      padding: 0.5rem;
      font-size: 0.85rem;
    }

    .button-wrapper {
      margin-top: 1.5rem;
    }

    .form-button {
      font-size: 0.85rem;
      padding: 0.6rem 1rem;
    }
  }
</style>
