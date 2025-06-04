<script>
    import { selectedAgency } from "$lib/stores.js";
    import { isDark } from "../../stores/theme.js";
    import Map from "../../lib/WeatherMap.svelte";
</script>

<div class="container" class:dark={$isDark}>
    <main class="content">
        {#if $selectedAgency === "MetService"}
            <iframe
                title="rss"
                class="feed"
                src="https://rss.app/embed/v1/wall/LgTbpx1cNjP0QQF4"
                frameborder="0"
            ></iframe>
        {:else if $selectedAgency === "NEMA"}
            <h1>NEMA Emergency Information</h1>
        {:else}
            <iframe
                title="rss"
                class="feed"
                src="https://rss.app/embed/v1/wall/LgTbpx1cNjP0QQF4"
                frameborder="0"
            ></iframe>
        {/if}
    </main>

    <aside class="sidebar">
        <div class="radar-card">
            <h2>Weather Radar</h2>
            <div class="map-container">
                <Map />
            </div>
        </div>
    </aside>
</div>

<style>
    * {
        box-sizing: border-box;
    }

    .page-container {
        display: flex;
        min-height: 100vh;
    }

  .dark {
    background-color: #121212;
    color: #f0f0f0;
  }

.dark h1{
   color: #f0f0f0; 
}

  .rss {
    width: 100%;
    height: 30em;
  }
 h1 {
        font-size: 2.5rem;  /* Default font size */
        text-align: center;
        margin-bottom: 1.5em;
        font-weight: bold;
    }

    /* Media query for large tablets and smaller desktops (max-width: 1200px) */
    @media (max-width: 1200px) {
        h1 {
            font-size: 2rem; /* Smaller font size for medium screens */
            margin-bottom: 1.2em; /* Slightly smaller margin */
        }
    }

    /* Media query for tablets and small devices (max-width: 768px) */
    @media (max-width: 768px) {
        h1 {
            font-size: 1.8rem; /* Even smaller font size */
            margin-bottom: 1em; /* Adjust margin */
        }
    }

    /* Media query for mobile devices (max-width: 480px) */
    @media (max-width: 480px) {
        h1 {
            font-size: 1.5rem; /* Smaller font size for small screens */
            margin-bottom: 0.8em; /* Tighten up space between headings */
        }
    }
</style>