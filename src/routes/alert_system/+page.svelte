<script>
    let formAlert = {
        title: '',
        type: '',
        level: '',
        region: '',
        description: ''
    }

    function handleSubmit() {
        const alertData = JSON.stringify(formAlert);
        console.log(alertData);
    }
</script>

<h1>Alerts</h1>

<form on:submit|preventDefault={handleSubmit}>
  <h2>Post Alert:</h2>
  <div class="container">
    <label for="title">Title:</label>

    <input typ="text" id="title" name="alert-title" bind:value={formAlert.title}/>

    <label for="type">Emergency type:</label>

    <select for="type" id="type" bind:value={formAlert.type}>
      <option value="">Please select an emergency type</option>
      <option value="fire">Fire</option>
      <option value="flood">Flooding</option>
      <option value="quake">Earthquake damage</option>
    </select>

    <label for="level">Select alert level:</label>

    <select name="level" id="level" bind:value={formAlert.level}>
      <option value="one">1</option>
      <option value="two">2</option>
      <option value="three">3</option>
      <option value="four">4</option>
      <option value="five">5</option>
    </select>

    <label for="region">Choose Region:</label>

    <select name="region" id="region" bind:value={formAlert.region}>
      <option value="">Please select a region</option>
      <option value="Otago">Otago</option>
      <option value="Canterbury">Canterbury</option>
      <option value="Southland">Southland</option>
    </select>

    <label for="description">Description:</label>

    <textarea id="description" name="description" bind:value={formAlert.description}></textarea>
  </div>
  <div>
    <button type="submit">Submit</button>
  </div>
</form>

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
  @media (max-width: 1281px) {
    .container {
      display: block;
    }
    textarea {
      width: auto;
    }
    label {
      align-self:center;
    }
  }
</style>
