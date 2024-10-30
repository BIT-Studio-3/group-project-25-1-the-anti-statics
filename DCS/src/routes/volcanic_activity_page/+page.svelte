<script>
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
    
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
                return '#FFFF00';
            case 2:
                return '#FFD700';
            case 3:
                return '#FF7F00';
            case 4:
                return '#FF4500';
            case 5:
                return '#FF0000';
        }
    }

    displayVolcanoCards();
</script>

<Header />

<h1>Volcanic Activity</h1>

<div class="cardcontainer">
    {#each volcanoCards as card}
        <div class="volcanocard" id={card.id} style="background-color: {getCardBackground(card)};">
            <h2>{card.title}</h2>
            <p>Activity: {card.activity}</p>
            <p>Hazard Level: {card.hazardLevel}</p>
            <p>Hazards: {card.hazards}</p>
        </div>
    {/each}
</div>

<Footer />

<style>
    * {
        padding: 0;
        margin: 0;
        font-family: sans-serif;
        color: #333
    }

    h1 {
        margin-top: 0.5em;
    }

    .cardcontainer {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1em;
        margin-top: 1em;
        margin-bottom: 1em;
    }

    .volcanocard {
        border: 2px solid black;
        padding: 0.8em;
        background: #f9f9f9;
        border-radius: 5px;
    }
</style>
