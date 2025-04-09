<script>
    import { selectedAgency } from "$lib/stores.js";
    import { page } from "$app/stores"; // Get current page URL

    // Define which agencies should be available on each page
    const agencyMap = {
        "/weather_reports_page": ["MetService", "NEMA"],
        "/seismic_reports_page": ["GeoNet", "NEMA", "NZDF"],
        "/road_conditions_page": ["Waka Kotahi", "KiwiRail", "NZ Police", "Local Council"],
        "/fire_and_emergency_page": ["FENZ", "NZ Police", "DOC", "NEMA"]
    };

    // Reactive statement to get agencies for the current page
    $: agencies = agencyMap[$page.url.pathname] || ["All"]; // Default to "All" if page not found
</script>

<section>
    <select bind:value={$selectedAgency}>
    <option value="All">All</option>
    {#each agencies as agency}
        <option value={agency}>{agency}</option>
    {/each}
    </select>
</section>

<style>
    section{
        display: flex;
        background-color: inherit;
        padding: 0.2em 1em 0.2em 1em;
        justify-content: center;
        align-items: center;
    }
    p, select{
        background-color: inherit;
    }
    select{
        padding: 0.5em;
    }
</style>
