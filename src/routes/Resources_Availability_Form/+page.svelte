<script>
   // Variable declarations using camelCase naming convention
    let orgName = ''; // Organization name input field
    let contactInfo = ''; // Contact information input field
    let helpDescription = ''; // Description of how the organization can assist
    let conditions = ''; // Conditions for providing assistance
    let submitted = false; // Flag to check if form has been submitted
    
    // Function to handle form submission
    function handleSubmit() {
      // Check if all required fields are filled before submission
      if (orgName && contactInfo && helpDescription && conditions) {
        // Process form data
        console.log('Form submitted:', { orgName, contactInfo, helpDescription, conditions });
        submitted = true; // Mark the form as submitted
      } else {
        alert('Please fill out all fields'); // Alert user if any required fields are missing
      }
    }
  </script>
  
  <main>
    <h1>Disaster Relief Organizations Form</h1>
  
    {#if submitted}  <!-- Display a thank you message after form submission -->
      <p>Thank you for submitting the information. We will get in touch with you shortly.</p>
    {/if}
  
    <form on:submit|preventDefault={handleSubmit}>  <!-- Form for disaster relief organization submission -->
      <!-- Organization Name input field -->
      <div>
        <label for="orgName">Organization Name</label>
        <input type="text" id="orgName" bind:value={orgName} placeholder="Enter organization name" required />
      </div>
  
      <div> <!-- Contact Information input field -->
        <label for="contactInfo">Contact Information</label>
        <input type="text" id="contactInfo" bind:value={contactInfo} placeholder="Enter contact info" required />
      </div>
  
      <div>  <!-- Help Description input field -->
        <label for="helpDescription">How can you help?</label>
        <textarea id="helpDescription" bind:value={helpDescription} placeholder="Describe the ways you can assist" required></textarea>
      </div>
  
      <div> <!-- Conditions input field -->
        <label for="conditions">Conditions</label>
        <textarea id="conditions" bind:value={conditions} placeholder="Explain any conditions for your assistance" required></textarea>
      </div>
  
      <!-- Submit button to send the form data -->
      <button type="submit">Submit</button>
    </form>
  </main>
  
  <style>
    /* Main section style */
    main {
      padding: 2rem;
      max-width: 600px;
      margin: 0 auto;
    }
  
    form div { /* Style for each form div */
      margin-bottom: 1.5rem;
    }
  
    label /* Label styling */ {
      display: block;
      margin-bottom: 0.5rem;
    }
  
    input, textarea /* Styling for text inputs and text areas */ {
      width: 100%;
      padding: 0.8rem;
      font-size: 1rem;
    }
  
    button /* Submit button styling */ {
      padding: 1rem;
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
      font-size: 1rem;
    }
  
    button:hover /* Hover effect for button */{
      background-color: #45a049;
    }
    @media (max-width: 1200px) {
    main {
        padding: 1.5rem; /* Reduce padding for tablets */
        max-width: 500px; /* Reduce form width */
    }

    input, textarea, button {
        font-size: 1.1rem; /* Slightly larger font for readability */
    }

    button {
        padding: 0.9rem; /* Adjust button padding */
    }
}

/* For mobile devices (phones in portrait mode) */
@media (max-width: 768px) {
    main {
        padding: 1.2rem; /* Reduce padding for smaller screens */
        max-width: 100%; /* Ensure form takes full width on small screens */
    }

    input, textarea, button {
        font-size: 1rem; /* Adjust font size */
    }

    button {
        padding: 1rem; /* Adjust button padding */
    }
}

/* For very small screens (phones in portrait mode) */
@media (max-width: 480px) {
    main {
        padding: 1rem; /* Further reduce padding */
        max-width: 100%; /* Ensure form takes full width on very small screens */
    }

    input, textarea, button {
        font-size: 0.9rem; /* Adjust font size for very small screens */
    }

    button {
        padding: 0.9rem; /* Adjust button padding for small screens */
    }
}
  </style>
  