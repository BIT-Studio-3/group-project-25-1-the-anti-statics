<script>
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import { onMount } from "svelte";
  
  onMount(() => {
    console.log(window); // Now safe to access 'window' since this runs only in the browser
  });

  const RSS_URL = `https://cors-anywhere.herokuapp.com/https://alerthub.civildefence.govt.nz/rss/pwp`;
  fetch(RSS_URL)
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((url1) => console.log(url1));

    const RSS_URL2=`https://cors-anywhere.herokuapp.com/https://alerts.metservice.com/cap/rss`
    fetch(RSS_URL2)
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((url2) => console.log(url2));

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
