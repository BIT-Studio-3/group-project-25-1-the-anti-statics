<script>
  import DamageCard from "../../lib/damageCard.svelte";
  import { postDamage } from "./post-functions/postDamage.js";
  import { address } from "$lib/stores.js";
  import Address from "../../lib/Address.svelte";
  import { get } from "svelte/store";
  import { isDark } from "../../stores/theme.js";

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
      location: get(address),
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
      address.set("");
      count = "";
      cause = "";
    }
  };

  export let data;
  const { damages } = data;
</script>

<main class:dark={$isDark}>
<div class="page-container">
  <div class="damage-logs">
    <h3>Logged Damages</h3>
    <div class="damage-list-container">
      {#if !damages || damages.length === 0}
        <p class="no-damages">No damages logged</p>
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

  <div class="form-container">
      <form on:submit={submitDamage}>
        <h3>Log Damages</h3>
        <div class="form-group">
          <label for="reporterName">Reporter Name</label>
          <input type="text" id="reporterName" bind:value={name} placeholder="Enter your full name" required />
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
            <option value=1>1</option>
            <option value=2>2</option>
            <option value=3>3</option>
            <option value=4>4</option>
            <option value=5>5</option>
          </select>
        </div>

        <div class="form-group">
          <label for="location">Location</label>
          <Address bind:value={$address}></Address>
        </div>

        <div class="form-group">
          <label for="count">Individuals Affected</label>
          <select id="count" bind:value={count} required>
            <option value="">Select number of individuals affected</option>
            <option value=1>Less than 5</option>
            <option value=2>5</option>
            <option value=3>10</option>
            <option value=4>20</option>
            <option value=5>50</option>
            <option value=6>100</option>
          </select>
        </div>

        <div class="form-group">
          <label for="cause">Cause</label>
          <textarea id="cause" bind:value={cause} placeholder="Provide the possible cause of the damage" required></textarea>
        </div>

        <div class="button-wrapper">
          <button type="submit" class="form-button">Submit</button>
        </div>
      </form>
  </div>
</div>

 {#if postError}<p class="error-text">{postError}</p>{/if}
  {#if error}<p class="error-text">{error}</p>{/if}
  {#if info}<p class="success-text">The damage has been logged successfully!</p>{/if}
</main>

<style>
  .page-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 2em;
    place-items: center;
  }

  .damage-logs, .form-container {
    border: 1px solid #10941b;
    box-shadow: 0 0 6px rgba(76, 85, 76, 0.5);
    border-radius: 15px;
    padding: 1em;
    height: 45em;
    overflow-y: auto;
    background-color: white;
    color: #333;
  }

  .damage-logs {
    flex: 1;
    max-width: 25%;
    min-width: 15%;
  }

  .form-container {
    flex: 2;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin-bottom: 1rem;
    text-align: center;
    color: #2b5876;
    font-size: x-large;
  }

  .form-group {
    margin: 1.5rem 0;
    text-align: left;
  }

  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #2b5876;
  }

  input, select, textarea {
    width: 90%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
  }

  input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: #4CAF50;
    box-shadow: 0 0 6px rgba(76, 175, 80, 0.5);
  }

  textarea {
    resize: none;
    height: 80px;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .form-button {
    width: 20%;
    padding: 0.75rem;
    background-color: #4CAF50;
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

  .error-text { color: red; text-align: center; }
  .success-text { color: green; text-align: center; }

  /* Dark mode overrides */
  main.dark .form-container,
  main.dark .damage-logs {
    background-color: #1f1f1f;
    color: white;
    border-color: #4caf50;
  }

  main.dark label,
  main.dark h3,
  main.dark .no-damages,
  main.dark input::placeholder,
  main.dark textarea::placeholder {
    color: white;
  }

  main.dark input,
  main.dark select,
  main.dark textarea {
    background-color: #2a2a2a;
    color: white;
    border-color: #555;
  }

  main.dark .form-button {
    background-color: #27ae60;
  }

  main.dark .form-button:hover {
    background-color: white;
    color: #27ae60;
  }

  main.dark :global(input[type="text"]) {
    background-color: #2a2a2a !important;
    color: white !important;
    border-color: #555 !important;
  }

  main.dark :global(input[type="text"]::placeholder) {
    color: #ccc !important;
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

    .damage-logs, .form-container {
      width: 100%;
      max-width: 90%;
      flex: none;
      height: auto;
    }
  }
</style>
