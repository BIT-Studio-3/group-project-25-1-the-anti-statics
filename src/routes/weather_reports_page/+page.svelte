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

</style>