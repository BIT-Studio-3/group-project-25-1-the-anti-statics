<script>
  //Import post alert function
  import { postAlert } from "./post-functions/postAlert.js"; // Import the postAlert function
  //Import post alert function variables
  let postError = '';
  let data = null;
  let error = '';

  let title = '';
  let type = '';
  let level = '';
  let region = '';
  let description = '';

  // Function to handle form submission
  const submitAlert = async (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    let formattedTitle = isNaN(title) ? title : Number(title); //Check if the title contains numbers or not

    // Form data object
    const alertData = {
      title: formattedTitle,
      emergencyType: type, // Assuming you are using 'emergencyType' on the backend
      alertLevel: level,
      region,
      description,
    };

    // Call the postAlert function and use the result directly
    const result = await postAlert(alertData);

    // Update the state with the result values directly
    postError = result.postError;
    data = result.data;
    error = result.error;

    // Log the result for debugging
    console.log("Result from postAlert:", result);
    console.log("Post error:", postError);
    console.log("Post data:", data);
    console.log("Error:", error);

    if (result.data) {
      alert("Alert posted successfully!");

      // Reset form fields
      title = '';
      type = '';
      level = '';
      region = '';
      description = '';
    }
  };
</script>

<main>
<h1>Alerts</h1>

  <section class="form-container">
<form on:submit={submitAlert}>
      <div class="form-group">
        <h2>Post Alert</h2>
        <label for="title">Title</label>
        <input type="text" id="title" bind:value={title} placeholder="Enter alert title" required />
      </div>

      <div class="form-group">
        <label for="type">Emergency Type</label>
        <select id="type" bind:value={type} required>
      <option value=''>Please select an emergency type</option>
      <option value="fire">Fire</option>
      <option value="flood">Flooding</option>
          <option value="quake">Earthquake Damage</option>
    </select>
      </div>

      <div class="form-group">
        <label for="level">Alert Level</label>
        <select id="level" bind:value={level} required>
          <option value=1>1</option>
          <option value=2>2</option>
          <option value=3>3</option>
          <option value=4>4</option>
          <option value=5>5</option>
    </select>
      </div>

      <div class="form-group">
        <label for="region">Region</label>
        <select id="region" bind:value={region} required>
      <option value="">Please select a region</option>
      <option value="Otago">Otago</option>
      <option value="Canterbury">Canterbury</option>
      <option value="Southland">Southland</option>
    </select>
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea id="description" bind:value={description} placeholder="Provide a description" required></textarea>
  </div>

    <button type="submit">Submit</button>
</form>
  </section>

{#if postError}
    <p class="error-message">⚠️ {postError}</p>
{/if}

{#if error}
    <p class="error-message">⚠️ {error}</p>
{/if}

{#if data}
    <p class="success-message">✅ Alert posted successfully!</p>
{/if}
</main>

<style>
  main {
    padding: 2rem;
    max-width: 60%;
    margin: 0 auto;
    text-align: center;
  }

  .form-container {
    background: #f9f9f9;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  button:hover {
    background-color: #427211;
    transition: 0.2s;
  }

  textarea {
    margin: 0.5em;
    resize: none;
    vertical-align: top;
    height: 10em;
    width: 25em;
    background-color: white !important; 
  }

  h1 {
    background-color: white;
    color: #333;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    border: 5px rgb(46, 45, 45) solid;
    background-color: white;
    border-radius: 15px;
    width: fit-content;
    padding: 1em;
    margin-top: 2%;
  }

  form h2 {
    text-align: center;
    margin-bottom: 2%;
  }

  label {
    color: rgb(50, 51, 51);
    text-align: right;
    justify-content: center;
    padding-top: 10px;
    background-color: white;
  }

  div {
    padding: 0.5em;
    background-color: white; 
  }

  input,
  select {
    max-width: fit-content;
    margin: 0.5em;
    background-color: white !important; 
  }

  @media (max-width: 1200px) {
    .container {
      background-color: white;
      display: block; /* Stack the form fields vertically */
    }

    textarea {
      background-color: white;
      width: 100%; /* Ensure textarea takes full width */
    }

    label {
      background-color: white;
      align-self: center; /* Align labels properly */
    }

    input,
    select {
      background-color: white;
      width: 100%; /* Ensure input/select fields take full width */
      margin: 0.5em 0; /* Add space between fields */
    }
  }

  /* For mobile devices (phones in portrait mode) */
  @media (max-width: 768px) {
    textarea {
      background-color: white;
      width: 100%; /* Ensure textarea takes full width on small screens */
    }

    .container {
      background-color: white;
      display: block; /* Stack the form fields vertically */
    }

    label {
      background-color: white;
      font-size: 0.9em; /* Adjust font size for labels */
      text-align: left; /* Align labels to the left on mobile */
    }

    input,
    select {
      background-color: white;
      width: 100%; /* Ensure input/select fields take full width */
      margin: 0.5em 0; /* Add space between fields */
    }
  }

  /* For very small screens (phones in portrait mode) */
  @media (max-width: 480px) {
    label {
      background-color: white;
      font-size: 0.85em; /* Further reduce label font size */
    }

    input,
    select {
      background-color: white;
      width: 100%; /* Ensure input/select fields take full width */
    }

    /* button {
      padding: 1em;
      font-size: 1em; 
    } */
  }
</style>
