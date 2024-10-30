<script>
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";

    export let data;
    console.log(data);
</script>

<Header />
<h1>Quakes</h1>
<div class="container">
    <details close>
        <summary><h2>MMI 5 Quakes</h2></summary>
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
    </details>
    <details close>
        <summary><h2>MMI 6 Quakes</h2></summary>
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
    </details>
    <details open>
        <summary><h2>MMI 7 Quakes</h2></summary>
        <div class="item">
            {#each data.quakes3.features as thing}
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
    </details>
    <details open>
        <summary><h2>MMI 8 Quakes</h2></summary>
        <div class="item">
            {#each data.quakes4.features as thing}
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
    </details>
</div>
<Footer />

<style>
    * {
        font-family: sans-serif;
    }
    div {
        border: 2px solid black;
        margin: 0.5em;
    }
    .container {
        display: grid;
    }
    details {
        padding: 10px;
        background-color: #B7DAF8;
        border-radius: 5px;
    }
    summary {
        background-color: #689fd4;
        color: white;
        padding: 10px;
    }
</style>
