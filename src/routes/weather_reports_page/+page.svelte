<script>
    import { selectedAgency } from '$lib/stores.js';
</script>


{#if $selectedAgency === "MetService"}
<iframe
    title="rss"
    class="rss"
    src="https://rss.app/embed/v1/wall/LgTbpx1cNjP0QQF4"
    frameborder="0"
></iframe>
{:else if $selectedAgency === "NEMA"}
<h1>NEMA Stuff</h1>
{:else if $selectedAgency === "FENZ"}
<h1>FENZ Stuff</h1>
{:else if $selectedAgency === "Waka Kotahi"}
<h1>Waka Kotahi Stuff</h1>
{:else}
<iframe
    title="rss"
    class="rss"
    src="https://rss.app/embed/v1/wall/LgTbpx1cNjP0QQF4"
    frameborder="0"
></iframe>
<h1>NEMA Stuff</h1>
<h1>FENZ Stuff</h1>
<h1>Waka Kotahi Stuff</h1>
{/if}

<style>
    h1 {
    font-size: 2em;
  }
  .rss {
    width: 100%;
    height: 30em;
  }
</style>