<script>
    export let data;
    const volcanos = data.volcanos;
    console.log(volcanos);

    let volcanoCards = [];

    function displayVolcanoCards() {
        if (volcanos && volcanos.features) {
            volcanoCards = volcanos.features.map((volcano) => ({
                title: volcano.properties.volcanoTitle,
                activity: volcano.properties.activity,
                hazardLevel: volcano.properties.level,
                hazards: volcano.properties.hazards,
                id: volcano.properties.volcanoTitle.replace(/\s+/g, "-"), // Create ID
            }));

            // Sort alphabetically by ID
            volcanoCards.sort((a, b) => a.id.localeCompare(b.id));
        }
    }

    function getCardBackground(card) {
        switch (card) {
            case 0:
                return "#3D995D";
            case 1:
                return "#00AFFF";
            case 2:
                return "#FFFF00";
            case 3:
                return "#FF6600";
            case 4:
                return "#FE0000";
            case 5:
                return "#999888";
        }
    }

    displayVolcanoCards();
</script>

<h2>Volcanic Activity</h2>
<h3>Colour Code:</h3>
<div class="Code">
    <p> 0 </p><div class="zero">█</div>
    <p> 1 </p><div class="one">█</div>
    <p> 2 </p><div class="two">█</div>
    <p> 3 </p><div class="three">█</div>
    <p> 4 </p><div class="four">█</div>
    <p> 5 </p><div class="five">█</div>
</div>
<div class="cardcontainer">
    {#each volcanoCards as card}
        <div
            class="volcanocard"
            id={card.id}
            style="background-color: {getCardBackground(card.hazardLevel)};"
        >
            <h3>{card.title}</h3>
            <p>Activity: {card.activity}</p>
            <p>Hazard Level: {card.hazardLevel}</p>
            <p>Hazards: {card.hazards}</p>
        </div>
    {/each}
</div>

<style>
    h2 {
        margin-top: 0.5em;
        margin-left: 1em;
        font-size: 180%;
    }

    h3 {
        background-color: inherit;
        font-size: 150%;
    }

    p {
        background-color: inherit;
        color: #222;
    }

    .cardcontainer {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1em;
        margin-top: 1em;
        margin-bottom: 1em;
        margin-left: 2em;
        margin-right: 2em;
    }

    .volcanocard {
        border: 2px solid black;
        padding: 0.8em;
        background: inherit;
        border-radius: 5px;
    }
    .Code {
        padding: 0.8em;
        margin-left: 1em;
        display:flex;
        flex-wrap: wrap;
        gap: 0.5em;
        flex-direction: row;
    }
    h3{
        font-size: large;
        margin-left: 1em;
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
    .five{
        color: #999888;  
    }
    .zero, .one, .two, .three, .four, .five {
        width: 60px; /* Set fixed width */
        height: 30px; /* Set fixed height */
        display: inline-block;
        border-radius: 4px; /* Optional rounded corners */
    }
    @media (max-width: 1200px) {
        /* For tablets and smaller desktops */
        .cardcontainer {
            grid-template-columns: repeat(2, 1fr); /* Adjust the grid to 2 columns */
            margin-left: 1.5em;
            margin-right: 1.5em;
        }

        h2 {
            font-size: 1.8rem; /* Adjust heading size */
        }

        h3 {
            font-size: 1.4rem; /* Adjust font size for subheading */
        }

        .volcanocard {
            padding: 1em;
            font-size: 1rem; /* Slightly adjust font size for smaller screens */
        }
    }

    @media (max-width: 768px) {
        /* For mobile devices */
        .cardcontainer {
            grid-template-columns: 1fr; /* Stack cards in one column */
            margin-left: 1em;
            margin-right: 1em;
        }

        h2 {
            font-size: 1.6rem; /* Slightly smaller heading for smaller screens */
        }

        h3 {
            font-size: 1.3rem; /* Slightly smaller subheading */
        }

        .volcanocard {
            padding: 1.2em; /* Increase padding slightly on small screens */
            font-size: 0.9rem; /* Reduce font size on small screens */
        }

        .Code {
            padding: 0.8em;
            flex-direction: row; /* Stack the color code blocks vertically */
            margin-left: 1em;
        }

        .zero, .one, .two, .three, .four, .five {
            width: 35px; /* Adjust the size of the color blocks */
            height: 25px;
        }
    }

    @media (max-width: 480px) {
        /* For very small screens (phones in portrait mode) */
        .cardcontainer {
            grid-template-columns: 1fr; /* Stack cards in one column */
            margin-left: 0.5em;
            margin-right: 0.5em;
        }

        h2 {
            font-size: 1.4rem; /* Even smaller font for mobile */
        }

        h3 {
            font-size: 1.2rem; /* Smaller subheading for mobile */
        }

        .volcanocard {
            padding: 1em; /* Adjust padding */
            font-size: 0.8rem; /* Adjust font size */
        }

        .Code {
            flex-direction: row;
            margin-left: 0.5em;
            padding: 0.5em;
        }

        .zero, .one, .two, .three, .four, .five {
            width: 30px; /* Even smaller color blocks */
            height: 20px;
        }
    }
</style>