<script>
    let orgName = '';
    let contactInfo = '';
    let helpDescription = '';
    let conditions = '';
    let submitted = false;
    
    function handleSubmit() {
      if (orgName && contactInfo && helpDescription && conditions) {
        // Process form data (e.g., send to a server or display)
        console.log('Form submitted:', { orgName, contactInfo, helpDescription, conditions });
        submitted = true;
      } else {
        alert('Please fill out all fields');
      }
    }
  </script>
  
  <main>
    <h1>Disaster Relief Organizations Form</h1>
  
    {#if submitted}
      <p>Thank you for submitting the information. We will get in touch with you shortly.</p>
    {/if}
  
    <form on:submit|preventDefault={handleSubmit}>
      <div>
        <label for="orgName">Organization Name</label>
        <input type="text" id="orgName" bind:value={orgName} placeholder="Enter organization name" required />
      </div>
  
      <div>
        <label for="contactInfo">Contact Information</label>
        <input type="text" id="contactInfo" bind:value={contactInfo} placeholder="Enter contact info" required />
      </div>
  
      <div>
        <label for="helpDescription">How can you help?</label>
        <textarea id="helpDescription" bind:value={helpDescription} placeholder="Describe the ways you can assist" required></textarea>
      </div>
  
      <div>
        <label for="conditions">Conditions</label>
        <textarea id="conditions" bind:value={conditions} placeholder="Explain any conditions for your assistance" required></textarea>
      </div>
  
      <button type="submit">Submit</button>
    </form>
  </main>
  
  <style>
    main {
      padding: 2rem;
      max-width: 600px;
      margin: 0 auto;
    }
  
    form div {
      margin-bottom: 1.5rem;
    }
  
    label {
      display: block;
      margin-bottom: 0.5rem;
    }
  
    input, textarea {
      width: 100%;
      padding: 0.8rem;
      font-size: 1rem;
    }
  
    button {
      padding: 1rem;
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 1rem;
    }
  
    button:hover {
      background-color: #45a049;
    }
  </style>
  