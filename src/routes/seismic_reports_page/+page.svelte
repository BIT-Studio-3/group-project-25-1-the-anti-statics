
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
    @media (max-width: 1200px) {
    h1 {
        font-size: 2rem; /* Adjust page title font size */
    }

    h2 {
        font-size: 1.8rem; /* Adjust quake details heading size */
    }

    h3 {
        font-size: 1.4rem; /* Adjust subheading font size */
    }

    p {
        font-size: 1rem; /* Adjust paragraph font size */
    }

    .container {
        padding: 1.5em;
        margin-left: 1em;
        margin-right: 1em;
    }

    details {
        padding: 1em;
    }

    summary {
        padding: 10px 20px;
        font-size: 1.1rem;
    }
}

/* For mobile devices (phones in portrait mode) */
@media (max-width: 768px) {
    h1 {
        font-size: 1.8rem; /* Adjust page title font size */
    }

    h2 {
        font-size: 1.6rem; /* Adjust quake details heading size */
    }

    h3 {
        font-size: 1.3rem; /* Adjust subheading font size */
    }

    p {
        font-size: 0.9rem; /* Adjust paragraph font size */
    }

    .container {
        padding: 1.2em;
        margin-left: 0.8em;
        margin-right: 0.8em;
    }

    details {
        padding: 0.8em;
    }

    summary {
        padding: 8px 16px;
        font-size: 1rem;
    }
}

/* For very small screens (phones in portrait mode) */
@media (max-width: 480px) {
    h1 {
        font-size: 1.6rem; /* Even smaller page title font size */
    }

    h2 {
        font-size: 1.4rem; /* Even smaller quake details heading size */
    }

    h3 {
        font-size: 1.2rem; /* Smaller subheading font size */
    }

    p {
        font-size: 0.9rem; /* Adjust paragraph font size */
    }

    .container {
        padding: 1em;
        margin-left: 0.5em;
        margin-right: 0.5em;
    }

    details {
        padding: 0.6em;
    }

    summary {
        padding: 8px 12px;
        font-size: 0.9rem;
    }
}
</style>

