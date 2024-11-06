<script>    
    export let data;
    const volcanos = data.volcanos;
    console.log(volcanos);

    let volcanoCards = [];

    function displayVolcanoCards() {
        if (volcanos && volcanos.features) {
            volcanoCards = volcanos.features.map(volcano => ({
                title: volcano.properties.volcanoTitle,
                activity: volcano.properties.activity,
                hazardLevel: volcano.properties.level,
                hazards: volcano.properties.hazards,
                id: volcano.properties.volcanoTitle.replace(/\s+/g, '-') // Create ID
            }));

            // Sort alphabetically by ID
            volcanoCards.sort((a, b) => a.id.localeCompare(b.id));

        }
    }

    function getCardBackground(card) {
        switch(card.hazardLevel) {
            case 1:
                return '#3D995D';
            case 2:
                return '#0000FF';
            case 3:
                return '#FFFF00';
            case 4:
                return '#FF6600';
            case 5:
                return '#FE0000';
        }
    }

    displayVolcanoCards();

    
</script>

<h2>Volcanic Activity</h2>

<div class="cardcontainer">
    {#each volcanoCards as card}
        <div class="volcanocard" id={card.id} style="background-color: {getCardBackground(card)};">
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
</style>
