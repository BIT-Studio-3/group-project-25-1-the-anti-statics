<script>
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
    import { onMount } from 'svelte';
    
    export let data;

    let volcanoCards = [];

    function displayVolcanoCards() {
        if (data.volcanos && data.volcanos.features) {
            volcanoCards = data.volcanos.features.map(feature => ({
                title: feature.properties.volcanoTitle,
                activity: feature.properties.activity,
                hazardLevel: feature.properties.level,
                hazards: feature.properties.hazards,
                id: feature.properties.volcanoTitle.replace(/\s+/g, '-') // Create ID
            }));

            // Sort alphabetically by ID
            volcanoCards.sort((a, b) => a.id.localeCompare(b.id));

            volcanoCards.forEach((card) => {
                if(card.hazardLevel > 0) {
                    card.backgroundColor = "#000";
                }
            });
        }
    }

    onMount(() => {
        displayVolcanoCards();
    });
</script>

<Header />

<h1>Volcanic Activity</h1>

<div class="cardcontainer">
    {#each volcanoCards as card}
        <div class="volcanocard {card.hazardLevel > 0 ? 'high-hazard' : 'low-hazard'}" id={card.id}>
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

    .high-hazard {
        background-color: red;
    }

    .low-hazard {

    }
</style>
