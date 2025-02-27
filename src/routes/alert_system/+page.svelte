<h1>Alerts</h1>
<p>
  This where users will be able to post alerts. They will be able to choose
  emergency type, level, and region.
</p>
<p>
  Alerts will show up in a feed on another page. This form currently does
  nothing. Once we learn more about logins, this page will be functional.
</p>

<form>
  <h2>Post Alert:</h2>
  <div class="container">
    <label for="title">Title:</label>

    <input typ="text" id="title" name="alert-title" />

    <label for="type">Emergency type:</label>

    <select for="type" id="type">
      <option value="">Please select an emergency type</option>
      <option value="fire">Fire</option>
      <option value="flood">Flooding</option>
      <option value="quake">Earthquake damage</option>
    </select>

    <label for="level">Select alert level:</label>

    <select name="level" id="level">
      <option value="one">1</option>
      <option value="two">2</option>
      <option value="three">3</option>
      <option value="four">4</option>
      <option value="five">5</option>
    </select>

    <label for="region">Choose Region:</label>

    <select name="region" id="region">
      <option value="">Please select a region</option>
      <option value="otago">Otago</option>
      <option value="canterbury">Canterbury</option>
      <option value="southland">Southland</option>
    </select>

    <label for="description">Description:</label>

    <textarea id="description" name="description"></textarea>
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
