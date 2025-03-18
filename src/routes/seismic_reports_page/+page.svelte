
<script>
    // exporting quake data
    export let data;
</script>

<!-- Page title -->
<h1>Quakes</h1>
<div class="container">
    <details close>
        <summary><h2>MMI 5 Quakes</h2></summary>
        <div class="card-grid">
        {#each data.quakes.features as thing}
            <div class="card">
                <h3 class="quake-locality">{thing.properties.locality}</h3>
                <div class="quake-info">
                    <p><strong>Coordinates:</strong> {thing.geometry.coordinates}</p>
                    <p><strong>Depth:</strong> {thing.properties.depth.toFixed(3)} KM</p>
                    <p><strong>Time:</strong> {thing.properties.time.replace(/[T]/g, " Time: ").replace(/[Z]/g, " ")}</p>
                </div>
            </div>
        {/each}
    </div>

    </details>
</div>
<div class="container">
    <details close>
        <summary><h2>MMI 6 Quakes</h2></summary>
        <div class="card-grid">
            {#each data.quakes2.features as thing}
                <div class="card">
                    <h3 class="quake-locality">{thing.properties.locality}</h3>
                    <div class="quake-info">
                        <p><strong>Coordinates:</strong> {thing.geometry.coordinates}</p>
                        <p><strong>Depth:</strong> {thing.properties.depth.toFixed(3)} KM</p>
                        <p><strong>Time:</strong> {thing.properties.time.replace(/[TZ]/g, " ").replace(/[Z]/g, " ")}</p>
                    </div>
                </div>
            {/each}
        </div>

    </details>
</div>
<div class="container">
    <details open>
        <summary><h2>MMI 7 Quakes</h2></summary>
        <div class="card-grid">
            {#each data.quakes3.features as thing}
                <div class="card">
                    <h3 class="quake-locality">{thing.properties.locality}</h3>
                    <div class="quake-info">
                        <p><strong>Coordinates:</strong> {thing.geometry.coordinates}</p>
                        <p><strong>Depth:</strong> {thing.properties.depth.toFixed(3)} KM</p>
                        <p><strong>Time:</strong> {thing.properties.time.replace(/[TZ]/g, " ").replace(/[Z]/g, " ")}</p>
                    </div>
                </div>
            {/each}
        </div>

    </details>
</div>
<div class="container">
    <details open>
        <summary><h2>MMI 8 Quakes</h2></summary>
        <div class="card-grid">
            {#each data.quakes2.features as thing}
                <div class="card">
                    <h3 class="quake-locality">{thing.properties.locality}</h3>
                    <div class="quake-info">
                        <p><strong>Coordinates:</strong> {thing.geometry.coordinates}</p>
                        <p><strong>Depth:</strong> {thing.properties.depth.toFixed(3)} KM</p>
                        <p><strong>Time:</strong> {thing.properties.time.replace(/[TZ]/g, " ").replace(/[Z]/g, " ")}</p>
                    </div>
                </div>
            {/each}
        </div>

    </details>
</div>

<style>
    h1{
        text-align: center;
        font-size: 2.5em;
        margin-bottom: 1em;
        font-weight: bold;
        color: #2c3e50;
    }

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

