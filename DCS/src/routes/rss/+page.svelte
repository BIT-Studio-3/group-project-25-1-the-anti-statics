<script>
  import { onMount } from "svelte";
</script>

<div>
  <iframe
    title="rss"
    class="rss"
    src="https://rss.app/embed/v1/wall/LgTbpx1cNjP0QQF4"
    frameborder="0"
  ></iframe>

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
  .rss {
    width: 100%;
    height: 100vh;
  }
</style>
