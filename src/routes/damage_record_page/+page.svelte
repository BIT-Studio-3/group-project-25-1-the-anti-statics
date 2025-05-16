<script>
  import DamageCard from "../../lib/damageCard.svelte";
  import { postDamage } from "./post-functions/postDamage.js";

  let postError = "";
  let info = null;
  let error = "";

  let name = "";
  let type = "";
  let level = "";
  let location = "";
  let count = "";
  let cause = "";

  const submitDamage = async (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    const damageData = {
      reporterName: name,
      damageType: type,
      damageLevel: level,
      location: location,
      countAffected: count,
      cause: cause,
    };

    const result = await postDamage(damageData);

    postError = result.postError;
    info = result.info;
    error = result.error;

    console.log("Result from postDamage:", result);
    console.log("Post error:", postError);
    console.log("Post data:", info);
    console.log("Error:", error);

    if (result.info) {
      alert("Damage posted successfully!");
      name = "";
      type = "";
      level = "";
      location = "";
      count = "";
      cause = "";
    }
  };

  export let data;
  const { damages, serverError, message } = data;
</script>

<div class="page-container">
  {#if serverError}
    <div class="error"><div class="ServerUnavailable">{serverError}</div></div>
  {:else}
    <div class="damage-logs">
      <h3>Logged Damages</h3>
      <div class="damage-list-container">
        {#if !damages || damages.length === 0}
          <p>No damages logged</p>
        {:else}
          <ul class="damage-list">
            {#each damages as damage}
              <li>
                <DamageCard obj={damage} />
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    </div>
  {/if}

  <div class="form-container">
    <form on:submit={submitDamage}>
      <h3>Log Damages</h3>
      <div class="form-group">
        <label for="reporterName">Reporter Name</label>
        <input
          type="text"
          id="reporterName"
          bind:value={name}
          placeholder="Enter your full name"
          required
        />
      </div>

      <div class="form-group">
        <label for="type">Type</label>
        <select id="type" bind:value={type} required>
          <option value="">Select damage type</option>
          <option value="Residential">Residential</option>
          <option value="Environmental">Environmental</option>
          <option value="Vehicle">Vehicle</option>
          <option value="Public Facilities">Public Facilities</option>
        </select>
      </div>

      <div class="form-group">
        <label for="level">Level</label>
        <select id="level" bind:value={level} required>
          <option value="">Select damage level</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div class="form-group">
        <label for="location">Location</label>
        <select id="location" bind:value={location} required>
          <option value="">Select location of damage</option>
          <option value="Otago">Otago</option>
          <option value="Canterbury">Canterbury</option>
          <option value="Southland">Southland</option>
        </select>
      </div>

      <div class="form-group">
        <label for="count">Individuals Affected</label>
        <select id="count" bind:value={count} required>
          <option value="">Select number of individuals affected</option>
          <option value="1">Less than 5</option>
          <option value="2">5</option>
          <option value="3">10</option>
          <option value="4">20</option>
          <option value="5">50</option>
          <option value="6">100</option>
        </select>
      </div>

      <div class="form-group">
        <label for="cause">Cause</label>
        <textarea
          id="cause"
          bind:value={cause}
          placeholder="Provide the possible cause of the damage"
          required
        ></textarea>
      </div>

      <div class="button-wrapper">
        <button type="submit" class="form-button">Submit</button>
      </div>
    </form>
  </div>
</div>

{#if postError}
  <p style="color: red;">{postError}</p>
{/if}

{#if error}
  <p style="color: red;">{error}</p>
{/if}

{#if info}
  <p style="color: green;">The damage has been logged successfully!</p>
{/if}

<style>
  .page-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 2em;
    place-items: center;
  }

  .damage-logs {
    flex: 1;
    max-width: 25%;
    min-width: 15%;
    color: #333;
    background-color: white;
    border: 1px solid #10941b;
    box-shadow: 0 0 6px rgba(76, 85, 76, 0.5);
    border-radius: 15px;
    padding: 1em;
    height: 45em;
    overflow-y: auto;
  }

  .damage-logs h3 {
    margin-bottom: 1rem;
    color: #2b5876;
    text-align: center;
  }

  .damage-list-container {
    overflow-y: auto;
    height: calc(100% - 2rem);
  }

  .damage-list {
    list-style: none;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 8px;
  }

  .damage-list li {
    list-style: none;
    margin-bottom: 1rem;
  }

  .form-container {
    flex: 2;
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    border: 1px solid #10941b;
    box-shadow: 0 0 6px rgba(76, 85, 76, 0.5);
    border-radius: 15px;
    color: #333;
    background-color: white;
    height: 45em;
    overflow-y: auto;
  }

  .form-container h3 {
    margin-bottom: 1rem;
    color: #2b5876;
    background-color: inherit;
    text-align: center;
    font-size: x-large;
  }

  .form-group {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: left;
  }

  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #2b5876;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 90%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 6px rgba(76, 175, 80, 0.5);
  }

  .form-group textarea {
    resize: none;
    height: 80px;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .ServerUnavailable {
    padding: 1em;
    border: 3px green;
    border-style: solid;
    border-radius: 15px;
    margin-top: 60%;
  }

  .error {
    flex: 1;
    max-width: 25%;
    min-width: 15%;
    color: #333;
    background-color: white;
    border: 1px solid #10941b;
    box-shadow: 0 0 6px rgba(76, 85, 76, 0.5);
    border-radius: 15px;
    padding: 1em;
    height: 45em;
    overflow-y: auto;
  }

  .form-button {
    width: 20%;
    padding: 0.75rem;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }

  .form-button:hover {
    background-color: #45a049;
  }
  #reporterName,
  #cause {
    width: 87%;
  }

  @media (max-width: 1060px) {
    .page-container {
      flex-direction: column;
      flex-wrap: wrap;
      gap: 10px;
      place-items: center;
    }

    .form-button {
      width: 90%;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
    }

    .damage-logs,
    .form-container {
      width: 100%;
      max-width: 90%;
      flex: none;
    }

    .damage-logs {
      margin-bottom: 10%;
      height: auto;
    }

    .form-container {
      height: auto;
      padding: 1rem;
    }
  }
</style>
