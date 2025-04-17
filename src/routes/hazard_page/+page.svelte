<script>
  import HazardCard from "$lib/hazardCard.svelte";
  import { postHazard } from "./post-function/postHazard.js";
  import FormLayout from "../../lib/formLayout.svelte";

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
    <FormLayout title="Log Hazard">
      <form on:submit={submitHazard}>
        <div class="form-group">
          <label for="title">Hazard Name</label>
          <input type="text" id="title" bind:value={name} placeholder="Enter hazard name" required />
        </div>

        <div class="form-group">
          <label for="type">Hazard Type</label>
          <select id="type" bind:value={type} required>
            <option value="">Select hazard type</option>
            <option value="fire">Fire</option>
            <option value="chemicals">Chemical Leak</option>
            <option value="slip">Slip</option>
          </select>
        </div>

        <div class="form-group">
          <label for="level">Hazard Level</label>
          <select id="level" bind:value={level} required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
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
    </FormLayout>
  </div>
</div>

<style>
  
  .page-container {
    display: flex;
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .hazard-logs {
    flex: 1;
    max-width: 25%;
    color: #333;
    background-color: white;
    border: 2px solid black;
    border-radius: 15px;
    padding: 1em;
    height: 55em;
    overflow-y: auto;
  }

  .hazard-logs h3 {
    margin-bottom: 1rem;
    color: #2b5876;
    background-color: inherit;
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
  @media (max-width: 1200px) {
    .container {
      display: block; /* Stack the form fields vertically */
    }

    textarea {
      width: 100%; /* Ensure textarea takes full width */
    }

    label {
      align-self: center; /* Align labels properly */
    }

    input,
    select {
      width: 100%; /* Ensure input/select fields take full width */
      margin: 0.5em 0; /* Add space between fields */
    }
  }

  /* For mobile devices (phones in portrait mode) */
  @media (max-width: 768px) {
    textarea {
      width: 100%; /* Ensure textarea takes full width on small screens */
    }

    .container {
      display: block; /* Stack the form fields vertically */
    }

    label {
      font-size: 0.9em; /* Adjust font size for labels */
      text-align: left; /* Align labels to the left on mobile */
    }

    input,
    select {
      width: 100%; /* Ensure input/select fields take full width */
      margin: 0.5em 0; /* Add space between fields */
    }

    button {
      width: 100%; /* Ensure the submit button takes full width */
      padding: 1em; /* Add padding for better usability */
    }
  }

  /* For very small screens (phones in portrait mode) */
  @media (max-width: 480px) {
    label {
      font-size: 0.85em; /* Further reduce label font size */
    }

    input,
    select {
      width: 100%; /* Ensure input/select fields take full width */
    }

    button {
      padding: 1em; /* Ensure button is touch-friendly */
      font-size: 1em; /* Adjust font size for button */
    }
  }
</style>
