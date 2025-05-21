<script>
    // exporting quake data
    export let data;

    const volcanos = data.volcanos;

    function getLevelClass(level) {
        return level === 0 ? 'greenTag' :
               level === 1 ? 'blueTag' :
               level === 2 ? 'yellowTag' :
               level === 3 ? 'orangeTag' :
               'redTag'; // Default to 'redTag' for levels 4 and above
    }

</script>

<!-- Page title -->
<h2>Quakes</h2>
<div class="container">
    <details close>
        <summary><h2 class="section-title"><span class="arrow-icon"> → </span> MMI 5 Quakes</h2></summary>
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
        <summary><h2 class="section-title"><span class="arrow-icon"> → </span> MMI 6 Quakes</h2></summary>
        <div class="card-grid">
            {#each data.quakes2.features as thing}
                <div class="card">
                    <h3 class="quake-locality">{thing.properties.locality}</h3>
                    <div class="quake-info">
                        <p><strong>Coordinates:</strong> {thing.geometry.coordinates[0].toFixed(1)} , {thing.geometry.coordinates[1].toFixed(1)}</p>
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
        <summary><h2 class="section-title"><span class="arrow-icon"> → </span> MMI 7 Quakes</h2></summary>
        <div class="card-grid">
            {#each data.quakes3.features as thing}
                <div class="card">
                    <h3 class="quake-locality">{thing.properties.locality}</h3>
                    <div class="quake-info">
                        <p><strong>Coordinates:</strong> {thing.geometry.coordinates[0].toFixed(1)} , {thing.geometry.coordinates[1].toFixed(1)}</p>
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
        <summary><h2 class="section-title"><span class="arrow-icon"> → </span> MMI 8 Quakes</h2></summary>
        <div class="card-grid">
            {#each data.quakes4.features as thing}
                <div class="card">
                    <h3 class="quake-locality">{thing.properties.locality}</h3>
                    <div class="quake-info">
                        <p><strong>Coordinates:</strong> {thing.geometry.coordinates[0].toFixed(1)} , {thing.geometry.coordinates[1].toFixed(1)}</p>
                        <p><strong>Depth:</strong> {thing.properties.depth.toFixed(3)} KM</p>
                        <p><strong>Time:</strong> {thing.properties.time.replace(/[TZ]/g, " ").replace(/[Z]/g, " ")}</p>
                    </div>
                </div>
            {/each}
        </div>
    </details>
</div>

<h2>Volcanic Activity</h2>
<div class="container">
    <div class="code">
        <h3>Key:</h3>
        <p> 0 </p><div class="zero">█</div>
        <p> 1 </p><div class="one">█</div>
        <p> 2 </p><div class="two">█</div>
        <p> 3 </p><div class="three">█</div>
        <p> 4 </p><div class="four">█</div>
    </div>
    <div class="card-grid">
        {#each volcanos.features as volcano}
        <div class="card {getLevelClass(volcano.properties.level)}">
            <h3 class="quake-locality">{volcano.properties.volcanoTitle}</h3>
            <div class="quake-info">
            <p><strong>Activity</strong>: {volcano.properties.activity}</p>
            <p><strong>Hazard Level</strong>: {volcano.properties.level}</p>
            <p><strong>Hazards:</strong> {volcano.properties.hazards}</p>
            </div>
        </div>
        {/each}
    </div>
</div>

<style>
    .container{
        padding: 1.5em;
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }

    h2{
        text-align: center;
        font-size: 2.5em;
        margin-bottom: 1em;
        font-weight: bold;
        color: #2c3e50;
    }

    .arrow-icon {
        transition: transform 0.2s ease;
    }

    .section-title {
        font-size: 1.8em;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .section-title:hover {
        color: #0b3d72; 
    }

    .section-title:hover .arrow-icon {
        transform: rotate(90deg);
    }

    .card-grid>.greenTag {
        border-left: solid green 10px;
    }

    .card-grid>.blueTag {
        border-left: solid blue 10px;
    }

    .card-grid>.yellowTag {
        border-left: solid yellow 10px;
    }

    .card-grid>.orangeTag {
        border-left: solid orange 10px;
    }

    .card-grid>.redTag {
        border-left: solid red 10px;
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
    .zero {
        color: #3d995d;
    }
    .one {
        color: #0000ff;
    }
    .two {
        color: #ffff00;
    }
    .three {
        color: #ff6600;
    }
    .four {
        color: #fe0000;
    }
    .code {
        padding: 0.8em;
        margin-left: 1em;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em;
        flex-direction: row;
        justify-content: center;
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
    .card {
        background-color: #ffffff;
        padding: 1.5em;
        border-radius: 10px;
        border: 1px solid #bdc3c7;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease-in-out;
        cursor: pointer;
    }

    .card:hover {
        transform: scale(1.05);
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
