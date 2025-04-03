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

<div class="pageContainer">
  <form on:submit={submitHazard}>
    <h2>Log Hazard:</h2>
    <div class="container">
      <label for="title">Title:</label>
      <input type="text" id="title" bind:value={name} required />

      <label for="type">Hazard type:</label>
      <select bind:value={type} required>
        <option value="">Please select an hazard type</option>
        <option value="fire">Fire</option>
        <option value="chemicals">Chemical Leak</option>
        <option value="slip">Slip</option>
      </select>

      <label for="level">Select hazard level:</label>
      <select bind:value={level} required>
        <option value=1>1</option>
        <option value=2>2</option>
        <option value=3>3</option>
        <option value=4>4</option>
        <option value=5>5</option>
      </select>

      <label for="city">City/Town:</label>
      <input type="text" id="city" bind:value={city} required />

      <label for="location">Location (street or suburb):</label>
      <input type="text" id="location" bind:value={location} required />

      <label for="description">Description:</label>
      <textarea id="description" bind:value={description} required></textarea>
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>

  <div class="hazardlogs">
    {#if !data.hazards || data.hazards.length === 0}
      <p>No hazards logged</p>
    {:else}
    <h3>Recent Hazards</h3>
    <ul class="hazardLogs">
      {#each hazards as hazard}
        <li>
          <HazardCard obj={hazard} />
        </li>
      {/each}
    </ul>
    {/if}
  </div>
</div>

<style>
  * {
    font-family: sans-serif;
    color: #333;
  }
  textarea {
    vertical-align: top;
    height: 10em;
    width: 25em;
  }
  label {
    text-align: right;
    justify-content: center;
    padding-top: 10px;
  }
  div {
    padding: 0.5em;
  }
  form {
    display: inline-block;
    border-color: black;
    border: solid;
    padding: 1em;
    max-height: fit-content;
  }
  .pageContainer {
    display: flex;
    max-height: 70vh;
  }
  .hazardlogs {
    border-color: black;
    border: solid;
    display: grid;
    grid-template-columns: auto;
    max-height: fit-content;
  }
  .hazardlogs ul {
    max-height: 70vh;
    overflow-y: auto;
  }
  .hazardlogs li {
    margin-top: 0.5em;
    list-style: none;
    padding-left: 0.5em;
    float: left;
  }
  .container {
    display: grid;
    grid-template-columns: 25% 75%;
  }
  input {
    max-width: fit-content;
    margin: 0.5em;
  }
  select {
    max-width: fit-content;
    margin: 0.5em;
  }
  textarea {
    margin: 0.5em;
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
