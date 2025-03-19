<script>
    import { selectedAgency } from '$lib/stores.js';
</script>


{#if $selectedAgency === "MetService"}
<h1>Metservice Stuff</h1>
{:else if $selectedAgency === "NEMA"}
<h1>NEMA Stuff</h1>
{:else}
<h1>Metservice Stuff</h1>
<h1>NEMA Stuff</h1>
{/if}

<style>
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