<script>
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<div class="card">
  <h1>
    Emergency: <h3 id="Severe">Severe</h3>
  </h1>
  <p class="headers">Incident Number:</p><p>F4081881</p>
  <p class="headers">Date and Time:</p><p>06/11/2024 11:07:51</p>
  <p class="headers">Location:</p><p>Doyleston, Selwyn District</p>
  <p class="headers">Duration:</p><p>00:00:00</p>
  <p class="headers">Attending Stations/Brigades:</p><p>Leeston</p>
  <p class="headers">Call Type:</p><p>Vegetation Fire</p>
</div>

<div class="card">
  <h1>
    Emergency: <h3 id="Moderate">Moderate</h3>
  </h1>
  <p class="headers">Incident Number:</p><p>F4081881</p>
  <p class="headers">Date and Time:</p><p>06/11/2024 11:07:51</p>
  <p class="headers">Location:</p><p>Doyleston, Selwyn District</p>
  <p class="headers">Duration:</p><p>00:00:00</p>
  <p class="headers">Attending Stations/Brigades:</p><p>Leeston</p>
  <p class="headers">Call Type:</p><p>Vegetation Fire</p>
</div>

<div class="card">
  <h1>
    Emergency: <h3 id="Severe">Severe</h3>
  </h1>
  <p class="headers">Incident Number:</p><p>F4081881</p>
  <p class="headers">Date and Time:</p><p>06/11/2024 11:07:51</p>
  <p class="headers">Location:</p><p>Doyleston, Selwyn District</p>
  <p class="headers">Duration:</p><p>00:00:00</p>
  <p class="headers">Attending Stations/Brigades:</p><p>Leeston</p>
  <p class="headers">Call Type:</p><p>Vegetation Fire</p>
</div>

<div class="card">
  <h1>
    Emergency: <h3 id="Extreme">Extreme</h3>
  </h1>
  <p class="headers">Incident Number:</p><p>F4081881</p>
  <p class="headers">Date and Time:</p><p>06/11/2024 11:07:51</p>
  <p class="headers">Location:</p><p>Doyleston, Selwyn District</p>
  <p class="headers">Duration:</p><p>00:00:00</p>
  <p class="headers">Attending Stations/Brigades:</p><p>Leeston</p>
  <p class="headers">Call Type:</p><p>Vegetation Fire</p>
</div>

<style>
  h1 {
    font-size: 2em;
    margin: 4px;
  }
  h3 {
    color: black;
    padding: 4px;
    border: 2px solid black;
    border-radius: 5px;
    margin-bottom: 5px;
    width:fit-content;
  }
  .card {
    padding: 10px;
    margin: 10px;
    border: 2px solid black;
    border-radius: 5px;
    width:calc(min-content + 2em);
    float:left
  }
  p{
    margin: 3px;
  }
  .headers{
    font-weight:900;
  }
  #Moderate{
    background-color: yellow;
  }
  #Severe{
    background-color: orange;
  }
  #Extreme{
    background-color: red;
  }
  @media (max-width: 1200px) {
  h1 {
    font-size: 1.8em; /* Adjust heading size for tablets */
  }

  h3 {
    font-size: 1.2em; /* Adjust subheading size */
  }

  .card {
    width: calc(50% - 2em); /* Adjust card width for tablets, 2 cards per row */
    margin: 1em; /* Adjust margin for cards */
  }
}

/* For mobile devices (phones in portrait mode) */
@media (max-width: 768px) {
  h1 {
    font-size: 1.6em; /* Adjust heading size for smaller screens */
  }

  h3 {
    font-size: 1.1em; /* Adjust subheading size for smaller screens */
  }

  .card {
    width: 100%; /* Cards take full width on mobile */
    margin: 0.8em 0; /* Adjust margin for mobile */
  }
}

/* For very small screens (phones in portrait mode) */
@media (max-width: 480px) {
  h1 {
    font-size: 1.4em; /* Further reduce heading size */
  }

  h3 {
    font-size: 1em; /* Further reduce subheading size */
  }

  .card {
    width: 100%; /* Ensure the card takes full width */
    margin: 0.5em 0; /* Further reduce margin for very small screens */
  }
}
</style>