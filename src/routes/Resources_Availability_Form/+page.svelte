<script>
  import { onMount } from "svelte";
  import { postResource } from "./post-functions/postResource.js";
  import FormLayout from "../../lib/formLayout.svelte";
   import { isDark } from "../../stores/theme.js";

  let name = ""; 
  let contactInfo = ""; 
  let assistance = ""; 
  let conditions = ""; 
  let submitted = false; 
  let errorMessage = "";

  

  async function handleSubmit(event) {
    event.preventDefault(); 

    if (!name || !contactInfo || !assistance || !conditions) {
      alert("Please fill out all fields");
      return;
    }
    const resourceData = {
      name,
      contactInfo,
      assistance,
      conditions,
    };

   
    const result = await postResource(resourceData);

    if (result.data) {
      console.log("Form submitted successfully", result.data);
      submitted = true;
      errorMessage = "";
      
      
      name = "";
      contactInfo = "";
      assistance = "";
      conditions = "";
    } else {
      errorMessage = result.error || "Failed to submit data";
    }
  }

  let resources = [];
  onMount(async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      resources = data.data || [];
    } catch (err) {
      console.error("Failed to load resources:", err);
    }
  });
  </script>
  
  <main class:dark={$isDark}>
    <h1>Disaster Relief Organizations Form</h1>
  
    {#if submitted}
    <p class="success-message">✅ Thank you for submitting your information. We will contact you shortly.</p>
  {:else}
    <FormLayout title = "Disaster Operations Form">
      <form on:submit={handleSubmit}>
      <div class="form-group">
        <label for="name">Organization Name</label>
        <input type="text" id="name" bind:value={name} placeholder="Enter organization name" required />
        </div>
  
      <div class="form-group"> 
        <label for="contactInfo">Contact Information</label>
        <input type="text" id="contactInfo" bind:value={contactInfo} placeholder="Enter contact info" required />
      </div>
  
      <div class="form-group"> 
        <label for="assistance">How can you help?</label>
        <textarea id="assistance" bind:value={assistance} placeholder="Describe the ways you can assist" required></textarea>
      </div>
  
      <div class="form-group"> 
        <label for="conditions">Conditions</label>
        <textarea id="conditions" bind:value={conditions} placeholder="Explain any conditions for your assistance" required></textarea>
      </div>
  
      {#if errorMessage}
      <p class="error-message">⚠️ {errorMessage}</p>
    {/if}

    <div class="button-wrapper">
      <button type="submit" class="form-button">Submit</button>
    </div>
    </form>
  </FormLayout>
    {/if}

  {#if resources.length > 0}
    <section class="resources-list">
      <h2>Existing Resources</h2>
      <ul>
        {#each resources as resource}
          <li>
            <strong>{resource.name}</strong>: {resource.assistance}
          </li>
        {/each}
      </ul>
    </section>
  {/if}
  </main>
  
  <style>
    main {
      padding: 2rem;
  max-width: 60%;
  margin: 0 auto;
  text-align: center;
  background-color: white;
  color: black;
  transition: background-color 0.3s ease, color 0.3s ease;
    }

    .dark {
  background-color: #121212;
  color: #f0f0f0;
}

.dark input,
.dark textarea {
  background-color: #1f1f1f;
  color: #f0f0f0;
  border: 1px solid #444;
}

.dark .form-group label {
  color: #f0f0f0;
}

.dark .resources-list li {
  border-bottom: 1px solid #555;
}

.dark h1{
  color: white;
}

  .form-group {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: left;
  }

  .form-group {
    margin-bottom: 15px;
  }

  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #2b5876;
  }

  .form-group input,
  .form-group textarea {
    width: 90%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #4CAF50;
    box-shadow: 0 0 6px rgba(76, 175, 80, 0.5);
  }

  .form-group textarea {
    resize: none;
    height: 80px;
  }

  .button-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .form-button {
    width: 30%;
    padding: 0.75rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
  
  input{
    width: 90%;
      padding: 0.8rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

  textarea{
    resize: none;
  }
  
    button {
      padding: 1rem;
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      border-radius: 5px;
      width: 20%;
    }
  
  button:hover {
      background-color: #45a049;
    }
    
    .success-message {
    color: green;
    font-size: 1.1rem;
    font-weight: bold;
    }

    .error-message {
    color: red;
    font-size: 1rem;
    font-weight: bold;
    }

    .resources-list {
    margin-top: 2rem;
    text-align: left;
    }

    .resources-list ul {
    list-style: none;
    padding: 0;
  }

  .resources-list li {
    padding: 0.8rem;
    border-bottom: 1px solid #ddd;
  }

    @media (max-width: 1200px) {
    main {
        padding: 1.5rem;
        max-width: 500px; 
    }

    input, textarea, button {
        font-size: 1.1rem; 
    }

    button {
        padding: 0.9rem;
    }
}


@media (max-width: 768px) {
    main {
        padding: 1.2rem;
        max-width: 100%; 
    }

    input, textarea, button {
        font-size: 1rem;
    }

    button {
        padding: 1rem;
    }
}

@media (max-width: 480px) {
    main {
        padding: 1rem;
        max-width: 100%;
    }

    input, textarea, button {
        font-size: 0.9rem;
    }

    button {
        padding: 0.9rem;
    }
}
  </style>
  