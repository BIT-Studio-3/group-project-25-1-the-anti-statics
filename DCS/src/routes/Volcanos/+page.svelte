<script>
    export let data;
    console.log(data);
</script>

<style>
    div{
        border: 2px solid black;
        margin: 0.5em;
        
    }
</style>

<h1>Volcanic Activity</h1>
{#each data.volcanos.features as thing}
<div>
<h2>{thing.properties.volcanoTitle}</h2>
<p>Activity: {thing.properties.activity}</p>
<p>Hazard Level: {thing.properties.level}</p>
<p>Hazards: {thing.properties.hazards}</p>
</div>
{/each}