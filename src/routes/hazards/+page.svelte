<script>
  import HazardCard from "$lib/hazardCard.svelte";
  import { postHazard } from "./post-function/postHazard.js";
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
  let city = "";
  let location = "";
  let description = "";

  const submitHazard = async (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Form info object
    const hazardInfo = {
      name,
      type,
      level,
      city,
      location: get(address),
      description,
    };

    // Call the postHazard function and use the result directly
    const result = await postHazard(hazardInfo);

    // Update the state with the result values directly
    postError = result.postError;
    info = result.info;
    error = result.error;

    // Log the result for debugging
    console.log("Result from postHazard:", result);
    console.log("Post error:", postError);
    console.log("Post info:", info);
    console.log("Error:", error);

    if (result.info) {
      alert("Hazard posted successfully!");

      // Reset form fields
      name = "";
      type = "";
      level = "";
      city = "";
      address.set("");
      description = "";
    }
  };

  //Export the load function
  export let data;
  console.log(data);
  const { hazards } = data;
</script>

<main class:dark={$isDark}>
<div class="page-container">
  <div class="hazard-logs">
    <h3>Recent Hazards</h3>
    <div class="hazard-list-container">
      {#if !hazards || hazards.length === 0}
        <p>No hazards logged.</p>
      {:else}
        <ul class="hazard-list">
          {#each hazards as hazard}
            <li>
              <HazardCard obj={hazard} />
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>

  <div class="form-container">
      <form on:submit={submitHazard}>
        <h3>Log Hazards</h3>
        <div class="form-group">
          <label for="title">Name</label>
          <input type="text" id="title" bind:value={name} placeholder="Enter hazard name" required />
        </div>

        <div class="form-group">
          <label for="type">Type</label>
          <select id="type" bind:value={type} required>
            <option value="">Select hazard type</option>
            <option value="fire">Fire</option>
            <option value="chemicals">Chemical Leak</option>
            <option value="slip">Slip</option>
          </select>
        </div>

        <div class="form-group">
          <label for="level">Level</label>
          <select id="level" bind:value={level} required>
            <option value=1>1</option>
            <option value=2>2</option>
            <option value=3>3</option>
            <option value=4>4</option>
            <option value=5>5</option>
          </select>
        </div>

        <div class="form-group">
          <label for="city">City/Town</label>
          <input type="text" id="city" bind:value={city} placeholder="Enter city or town" required />
        </div>

        <div class="form-group">
          <label for="location">Location (Street or Suburb)</label>
          <Address bind:value={$address}></Address>
        </div>

        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            id="description"
            bind:value={description}
            placeholder="Provide a description"
            required
          ></textarea>
        </div>

        <div class="button-wrapper">
        <button type="submit" class="form-button">Submit</button>
      </div>
      </form>
  </div>
</div>
</main>

<style>
  .page-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 2em;
    place-items: center;
  }

  .hazard-logs {
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

  .hazard-logs h3 {
    margin-bottom: 1rem;
    color: #2b5876;
    background-color: inherit;
    text-align: center;
  }

  .hazard-list-container {
    overflow-y: auto;
    height: calc(100% - 2rem);
  }

  .hazard-list {
    list-style: none;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 8px;
  }

  .hazard-list li {
    list-style: none;
    margin-bottom: 1rem;
  }

  .form-container h3 {
    margin-bottom: 1rem;
    color: #2b5876;
    background-color: inherit;
    text-align: center;
    font-size: x-large;
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
    border-color: #4CAF50;
    box-shadow: 0 0 6px rgba(76, 175, 80, 0.5);
  }

  .form-group textarea {
    resize: none;
    height: 80px;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  input, select {
    width: 90%;
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
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
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
  }

  .form-button:hover {
    background-color: #45a049;
  }

  #description, #title, #city{
    width: 87%;
  }

   main.dark .form-container,
  main.dark .hazard-logs {
    background-color: #1f1f1f;
    color: white;
    border-color: #4caf50;
  }

  main.dark label,
  main.dark h3,
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
    .form-button{
      width: 90%;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
    }
    .hazard-logs,
    .form-container {
      width: 100%;
      max-width: 90%;
      flex: none; 
    }

    .hazard-logs {
      margin-bottom: 10%;
      height: auto;
    }

    .form-container {
      height: auto;
      padding: 1rem;
    }
}
</style>
