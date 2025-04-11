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
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: inherit; /* Light gray background */
        border-radius: 8px; /* Rounded corners */
        margin-left: 1em;
        margin-right: 0.7em;
    }

    select {
        font-size: 1rem;
        padding: 1em;
        width: 130px; /* Fixed width for the select dropdown */
        border-radius: 5px;
        background-color: #fff; /* White background */
        color: #333; /* Dark text */
        transition: all 0.3s ease; /* Smooth transition for focus and hover */
    }

    select:hover {
        border-color: #3cb371; /* Green border on focus */
        background-color: lightgreen;
        cursor: pointer;
    }

    option {
        background-color:white ; /* White background for options */
        color: #333; /* Dark text for options */
        padding: 1em;
    }

    option:hover {
        background-color:lightgreen; /* Light hover effect */
    }

    
</style>
