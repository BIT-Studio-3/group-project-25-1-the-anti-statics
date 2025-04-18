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
    const { damages } = data;
  </script>
  
  <div class="page-container">
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
  
    <div class="form-container">
      <form on:submit={submitDamage}>
        <h3>Log Damages</h3>
        <div class="form-group">
          <label for="reporterName">Reporter Name</label>
          <input type="text" id="reporterName" bind:value={name} placeholder="Enter your full name" required />
        </div>
  
        <div class="form-group">
          <label for="type">Damage Type</label>
          <select id="type" bind:value={type} required>
            <option value="">Please select damage type</option>
            <option value="Residential">Residential</option>
            <option value="Environmental">Environmental</option>
            <option value="Vehicle">Vehicle</option>
            <option value="Public Facilities">Public Facilities</option>
          </select>
        </div>
  
        <div class="form-group">
          <label for="level">Select Damage Level</label>
          <select bind:value={level} required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
  
        <div class="form-group">
          <label for="location">Location</label>
          <select bind:value={location} required>
            <option value="">Please select location of damage</option>
            <option value="Otago">Otago</option>
            <option value="Canterbury">Canterbury</option>
            <option value="Southland">Southland</option>
          </select>
        </div>
  
        <div class="form-group">
          <label for="count">Individuals Affected</label>
          <select bind:value={count} required>
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
  
        <button type="submit" class="form-button">Submit</button>
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
      gap: 2rem;
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
  
    .damage-logs {
      flex: 1;
      max-width: 25%;
      background-color: white;
      border: 2px solid black;
      border-radius: 15px;
      padding: 1em;
      height: 55em;
      overflow-y: auto;
    }
  
    .damage-logs h3 {
      margin-bottom: 1rem;
      color: #2b5876;
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
      margin-bottom: 1rem;
    }
  
    .form-container {
      flex: 2;
      padding: 2rem;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
    #reporterName, #cause{
    width: 87%;
  }
  </style>
  