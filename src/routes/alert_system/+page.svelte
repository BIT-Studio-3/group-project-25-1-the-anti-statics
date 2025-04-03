<script>
  //Import post alert function
  import { postAlert } from './post-functions/postAlert.js';  // Import the postAlert function
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
      emergencyType: type,   // Assuming you are using 'emergencyType' on the backend
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
    console.log('Result from postAlert:', result);
    console.log('Post error:', postError);
    console.log('Post data:', data);
    console.log('Error:', error);
    
    if (result.data) {
      alert('Alert posted successfully!');
      
      // Reset form fields
      title = '';
      type = '';
      level = '';
      region = '';
      description = '';
    }
  };

</script>



<h1>Alerts</h1>

<form on:submit={submitAlert}>
  <h2>Post Alert:</h2>
  <div class="container">
    <label for="title">Title:</label>
    <input type="text" id="title" bind:value={title} required />

    <label for="type">Emergency type:</label>
    <select bind:value={type} required>
      <option value="">Please select an emergency type</option>
      <option value="fire">Fire</option>
      <option value="flood">Flooding</option>
      <option value="quake">Earthquake damage</option>
    </select>

    <label for="level">Select alert level:</label>
    <select bind:value={level} required>
      <option value=1>1</option>
      <option value=2>2</option>
      <option value=3>3</option>
      <option value=4>4</option>
      <option value=5>5</option>
    </select>

    <label for="region">Choose Region:</label>
    <select bind:value={region} required>
      <option value="">Please select a region</option>
      <option value="Otago">Otago</option>
      <option value="Canterbury">Canterbury</option>
      <option value="Southland">Southland</option>
    </select>

    <label for="description">Description:</label>
    <textarea id="description" bind:value={description} required></textarea>
  </div>
  <div>
    <button type="submit">Submit</button>
  </div>
</form>

{#if postError}
  <p style="color: red;">{postError}</p>
{/if}

{#if error}
  <p style="color: red;">{error}</p>
{/if}

{#if data}
  <p style="color: green;">Alert posted successfully!</p>
{/if}

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
  form {
    border-color: black;
    border: solid;
    padding: 1em;
    background-color:#ECA869;
  }
  label {
    text-align: right;
    justify-content: center;
    padding-top: 10px;
  }
  div {
    padding: 0.5em;
  }
  .container {
    display: grid;
    grid-template-columns: 10% 90%;
  }
  input {
    max-width: fit-content;
    margin: 0.5em;
  }
  select{
    max-width: fit-content;
    margin: 0.5em;
  }
  textarea{
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

  input, select {
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

  input, select {
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

  input, select {
    width: 100%; /* Ensure input/select fields take full width */
  }

  button {
    padding: 1em; /* Ensure button is touch-friendly */
    font-size: 1em; /* Adjust font size for button */
  }
  }
</style>
