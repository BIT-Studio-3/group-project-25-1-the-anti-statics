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
        switch (card.hazardLevel) {
            case 1:
                return "#3D995D";
            case 2:
                return "#0000FF";
            case 3:
                return "#FFFF00";
            case 4:
                return "#FF6600";
            case 5:
                return "#FE0000";
        }
    }

    displayVolcanoCards();
</script>

<h2>Volcanic Activity</h2>
<h3>Colour Code:</h3>
<div class="Code">
    <div class="one">1 █</div>
    <div class="two">2 █</div>
    <div class="three">3 █</div>
    <div class="four">4 █</div>
    <div class="five">5 █</div>
</div>
<div class="cardcontainer">
    {#each volcanoCards as card}
        <div
            class="volcanocard"
            id={card.id}
            style="background-color: {getCardBackground(card)};"
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
    }
    h3{
        font-size: large;
        margin-left: 1em;
    }

    .one {
        color: #3d995d;
        padding: 0.2em;
    }
    .two {
        color: #0000ff;
        padding: 0.2em;
    }
    .three {
        color: #ffff00;
        padding: 0.2em;
    }
    .four {
        color: #ff6600;
        padding: 0.2em;
    }
    .five {
        color: #fe0000;
        padding: 0.2em;
    }
</style>
