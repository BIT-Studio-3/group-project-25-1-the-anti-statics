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


    .feed {
        width: 100%;
        height: calc(100vh - 3rem);
    }

    .sidebar {
        display: flex;
        flex-direction: column;
    }

    .radar-card {
        background: white;
        border-radius: 16px;
        padding: 1.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(0, 0, 0, 0.05);
        height: calc(100vh - 3rem);
        display: flex;
        flex-direction: column;
    }

    .dark .radar-card {
        background: #000000;
        border: 1px solid #374151;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
    }

    .radar-card h2 {
        margin: 0 0 1rem 0;
        font-size: 1.3rem;
        font-weight: 600;
        color: #1f305c;
    }

    .dark .radar-card h2 {
        color: #60a5fa;
    }

    .map-container {
        flex: 1;
        border-radius: 12px;
        overflow: hidden;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
    }

    .dark .map-container {
        background: #000000;
        border: 1px solid #374151;
    }

    @media (max-width: 1024px) {
        .container {
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 1rem;
            margin-bottom:1rem;
        }

        .radar-card {
            height: 350px;
        }

        .feed {
            height: 500px;
        }

    }

    @media (max-width: 640px) {
        .container {
            padding: 0.75rem;
        }

        .radar-card,
        .content {
            border-radius: 12px;
        }

        .radar-card {
            height: 100%;
            padding: 1rem;
        }

        .feed {
            height: 400px;
        }
    }
</style>