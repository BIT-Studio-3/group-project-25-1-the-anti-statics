<script>
    // Importing Header and Footer tag from library
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    // exporting quake data
    export let data;
</script>

<Header />
<!-- Page title -->
<h1>Quakes</h1>
<div class="container">
    <details close>
        <summary><h2>MMI 5 Quakes</h2></summary>
        {#each data.quakes.features as thing}
            <div>
                <h2>{thing.properties.locality}</h2>
                <p>Coordinates (y, x):</p>
                <p>{thing.geometry.coordinates}</p>
                <p>Depth:</p>
                <p>{thing.properties.depth.toFixed(3)} KM</p>
                <p>Time:</p>
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
                <p>Coordinates (y, x):</p>
                <p>{thing.geometry.coordinates}</p>
                <p>Depth:</p>
                <p>{thing.properties.depth.toFixed(3)} KM</p>
                <p>Time:</p>
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
                <p>Coordinates (y, x):</p>
                <p>{thing.geometry.coordinates}</p>
                <p>Depth:</p>
                <p>{thing.properties.depth.toFixed(3)} KM</p>
                <p>Time:</p>
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
                <p>Coordinates (y, x):</p>
                <p>{thing.geometry.coordinates}</p>
                <p>Depth:</p>
                <p>{thing.properties.depth.toFixed(3)} KM</p>
                <p>Time:</p>
                <p>
                    {thing.properties.time
                        .replace(/[TZ]/g, " ")
                        .replace(/[Z]/g, " ")}
                </p>
            </div>
        {/each}
    </details>
</div>
<Footer />

<style>
    * {
        font-family: sans-serif;
    }
    div {
        border: 2px solid black;
        margin: 0.6em;
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
