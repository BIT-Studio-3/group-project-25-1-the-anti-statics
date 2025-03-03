<script>
    import { selectedAgency } from "$lib/stores.js";
</script>

<select bind:value={$selectedAgency}>
    <option value="All">All</option>
    <option value="FENZ">FENZ</option>
    <option value="GeoNet">GeoNet</option>
    <option value="USAR">USAR</option>
</select>

<style>
</style>