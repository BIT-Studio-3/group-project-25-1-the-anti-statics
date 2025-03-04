<script>
    import { selectedAgency } from "$lib/stores.js";
    export let agencies = [];
</script>

<select bind:value={$selectedAgency}>
    <option value="All">All</option>
    {#each agencies as agency}
        <option value={agency}>{agency}</option>
    {/each}
</select>

<style>
</style>