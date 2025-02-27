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
        padding: 0.2em;
    }
    h3{
        font-size: large;
        margin-left: 1em;
    }

    .zero {
        color: #3d995d;
        border: solid black 2px;
    }
    .one {
        color: #0000ff;
        border: solid black 2px;
    }
    .two {
        color: #ffff00;
        border: solid black 2px;
    }
    .three {
        color: #ff6600;
        border: solid black 2px;
    }
    .four {
        color: #fe0000;
        border: solid black 2px;
    }
    .five{
        color: #999888;
        border: solid black 2px;    
    }
</style>