<script>
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  async function getFENZ() {
    const response = await fetch(
      "https://gw.api.fireandemergency.nz/incr/v1/cadEvents/{CADnumber}"
    );
    const result = await response.json;
    console.log(result);
  }
</script>

<div>
<h1>Emergency Alert: <h3>Severe</h3></h1>
A severe flood warning has been issued by the Environmental Agency for the North Bank of the Humber Esturary.
There might be overtopping effecting sea front areas as a result of high spring tides and tidal surge between 3am and 8am. Call 111 for immediate assisstance.
</div>

<style>
  h1 {
    font-size: 2em;
  }
  h3 {
    background-color: orangered;
    color: black;
    padding: 4px;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  .card {
    padding: 10px;
    margin: 10px;
    border: 2px solid black;
    border-radius: 5px;
    width: 10em;
  }
</style>
