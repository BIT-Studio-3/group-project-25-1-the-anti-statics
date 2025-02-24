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
</style>