
<script>
    // exporting quake data
    export let data;
</script>

<!-- Page title -->
<h1>Quakes</h1>
<div class="container">
    <details close>
        <summary><h2>MMI 5 Quakes</h2></summary>
        {#each data.quakes.features as thing}
            <div>
                <h2>{thing.properties.locality}</h2>
                <h3>Coordinates (y, x):</h3>
                <p>{thing.geometry.coordinates}</p>
                <h3>Depth:</h3>
                <p>{thing.properties.depth.toFixed(3)} KM</p>
                <h3>Time:</h3>
                <p>
                    Date: {thing.properties.time
                        .replace(/[T]/g, " Time: ")
                        .replace(/[Z]/g, " ")}
                </p>
            </div>
        {/each}
    </details>
</div>
<div class="container">
    <details close>
        <summary><h2>MMI 6 Quakes</h2></summary>
        {#each data.quakes2.features as thing}
            <div>
                <h2>{thing.properties.locality}</h2>
                <h3>Coordinates (y, x):</h3>
                <p>{thing.geometry.coordinates}</p>
                <h3>Depth:</h3>
                <p>{thing.properties.depth.toFixed(3)} KM</p>
                <h3>Time:</h3>
                <p>
                    {thing.properties.time
                        .replace(/[TZ]/g, " ")
                        .replace(/[Z]/g, " ")}
                </p>
            </div>
        {/each}
    </details>
</div>
<div class="container">
    <details open>
        <summary><h2>MMI 7 Quakes</h2></summary>
        {#each data.quakes3.features as thing}
            <div>
                <h2>{thing.properties.locality}</h2>
                <h3>Coordinates (y, x):</h3>
                <p>{thing.geometry.coordinates}</p>
                <h3>Depth:</h3>
                <p>{thing.properties.depth.toFixed(3)} KM</p>
                <h3>Time:</h3>
                <p>
                    {thing.properties.time
                        .replace(/[TZ]/g, " ")
                        .replace(/[Z]/g, " ")}
                </p>
            </div>
        {/each}
    </details>
</div>
<div class="container">
    <details open>
        <summary><h2>MMI 8 Quakes</h2></summary>
        {#each data.quakes4.features as thing}
            <div>
                <h2>{thing.properties.locality}</h2>
                <h3>Coordinates (y, x):</h3>
                <p>{thing.geometry.coordinates}</p>
                <h3>Depth:</h3>
                <p>{thing.properties.depth.toFixed(3)} KM</p>
                <h3>Time:</h3>
                <p>
                    {thing.properties.time
                        .replace(/[TZ]/g, " ")
                        .replace(/[Z]/g, " ")}
                </p>
            </div>
        {/each}
    </details>
</div>

<style>

    div {
        border: 2px solid black;
        margin: 0.6em;
    }

    h3 {
        padding-left: 0.3em;
    }

    p {
        padding-top: 0.1em;
        padding-left: 0.8em;
    }

    details {
        padding: 0.5em;
        background-color: #b7daf8;
        border-radius: 0.5em;
        padding-left: 10px;
    }

    summary {
        background-color: #689fd4;
        color: white;
        list-style-position: outside;
        margin-left: 10px;
        padding: 10px 10px 10px 20px;
        border-radius: 5px;
    }

    .container{
        padding:1em;
        border: none;
    }

</style>

