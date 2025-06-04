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

    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        min-height: 100vh;
        padding: 1.5rem;
    }

    .content {
        background: white;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(0, 0, 0, 0.05);
    }

        }
    }
</style>