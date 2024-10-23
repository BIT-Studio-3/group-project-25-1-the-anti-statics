<script>
    export let data;
    console.log(data);
</script>

<style>
    div{
        border: 2px solid black;
        margin: 0.5em;
    }
    .container{
        display: grid;
    }
    .item{

    }
</style>

<h1>Quakes</h1>
<div class="container">
    <h2>MMI 5 Quakes</h2>
    <div class="item">
    {#each data.quakes.features as thing}
        <div>
            <h2>{thing.properties.locality}</h2>
            <p>Coordinates (y, x):</p>
            <p>{thing.geometry.coordinates}</p>
            <p>Depth:</p>
            <p>{thing.properties.depth}</p>
            <p>Time:</p>
            <p>{thing.properties.time}</p>
        </div>
    {/each}
    </div>
    <h2>MMI 6 Quakes</h2>
    <div class="item">
        {#each data.quakes2.features as thing}
            <div>
                <h2>{thing.properties.locality}</h2>
                <p>Coordinates (y, x):</p>
                <p>{thing.geometry.coordinates}</p>
                <p>Depth:</p>
                <p>{thing.properties.depth}</p>
                <p>Time:</p>
                <p>{thing.properties.time}</p>
            </div>
        {/each}
    </div>
</div>