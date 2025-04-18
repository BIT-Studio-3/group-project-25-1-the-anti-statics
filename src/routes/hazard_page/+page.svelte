<script>
  import HazardCard from "$lib/hazardCard.svelte";
  import { postHazard } from "./post-function/postHazard.js";

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
      location,
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
      title = "";
      type = "";
      level = "";
      city = "";
      location = "";
      description = "";
    }
  };

  //Export the load function
  export let data;
  console.log(data);
  const { hazards } = data;
</script>

<div class="page-container">
  <div class="hazard-logs">
    <h3>Recent Hazards</h3>
    <div class="hazard-list-container">
      {#if !data.hazards || data.hazards.length === 0}
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
          <input type="text" id="location" bind:value={location} placeholder="Enter location" required />
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

        <button type="submit" class="form-button">Submit</button>
      </form>
  </div>
</div>

<style>
  
  .page-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin: 2em;
    place-items: center;
  }

  .hazard-logs {
    flex: 1;
    max-width: 25%;
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

  .form-button {
    width: 90%;
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

  #description, #title, #location, #city{
    width: 87%;
  }
  @media (max-width: 1060px) {
    .page-container {
      flex-direction: column; 
      flex-wrap: wrap;
      gap: 10px;
      place-items: center;
    }
  }
</style>
