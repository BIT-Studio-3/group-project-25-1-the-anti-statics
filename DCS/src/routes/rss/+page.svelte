<script>
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import { onMount } from "svelte";
  export let data = {};

  console.log(data);


</script>

<Header />


<div class="card">
  <h3>Red Heavy Rain Warning</h3>
  <p>Dunedin, N. Otago and coastal Clutha</p>
  <p>Until 9pm Friday</p>
  <p>
    Expect 70-100mm of rain on top of what has already fallen. Heaviest rain
    around eastern hills
  </p>
</div>

<Footer />

<style>
  h1 {
    font-size: 2em;
  }
  h3 {
    background-color: orangered;
    padding: 4px;
    border-radius: 5px;
  }
  .card {
    padding: 10px;
    margin: 10px;
    border: 2px solid black;
    border-radius: 5px;
    width: 10em;
  }
</style>
