
<script>
    // exporting quake data
    export let data;
</script>

<!-- Page title -->
<h1>Quakes</h1>
<div class="container">
    <details close>
        <summary><h2 class="section-title">MMI 5 Quakes</h2></summary>
        <div class="card-grid">
        {#each data.quakes.features as thing}
            <div class="card">
                <h3 class="quake-locality">{thing.properties.locality}</h3>
                <div class="quake-info">
                    <p><strong>Coordinates:</strong> {thing.geometry.coordinates[0].toFixed(1)} , {thing.geometry.coordinates[1].toFixed(1)}</p>
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
        <summary><h2 class="section-title">MMI 6 Quakes</h2></summary>
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
        <summary><h2 class="section-title">MMI 7 Quakes</h2></summary>
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
        <summary><h2 class="section-title">MMI 8 Quakes</h2></summary>
        <div class="card-grid">
            {#each data.quakes4.features as thing}
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
    .container{
        padding: 1.5em;
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }

    h1{
        text-align: center;
        font-size: 2.5em;
        margin-bottom: 1em;
        font-weight: bold;
        color: #2c3e50;
    }
    .section-title {
        font-size: 1.8em;
        font-weight: bold;
    }

    details {
        padding: 1em;
        background-color: #ecf0f1;
        border-radius: 10px;
        border: none;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    summary {
        /* background-color: #3498db; */
        color: white;
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 1.2em;
        cursor: pointer;
        list-style-type: none;
    }

    .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1.5em;
    }

    .card {
        background-color: #ffffff;
        padding: 1.5em;
        border-radius: 10px;
        border: 1px solid #bdc3c7;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    
    .card:hover {
        transform: scale(1.05);
        transition: transform 0.3s ease-in-out;
    }
    .quake-locality {
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 0.8em;
        color: #34495e;
    }

    .quake-info p {
        margin: 0.5em 0;
        font-size: 1.1em;
        color: #7f8c8d;
    }

</style>

