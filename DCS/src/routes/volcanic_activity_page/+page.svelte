<script>
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';

    export let data;
    console.log(data);

    function displayVolcanoCards() {

        data.features.forEach(feature => {
            const volcanoCard = document.createElement("div");
            volcanoCard.className = "volcanocard";
            volcanoCard.id = feature.properties.volcanoTitle;
            volcanoCard.innerHTML = `
                <h2>{feature.properties.volcanoTitle}</h2>
                <p>Activity: {feature.properties.activity}</p>
                <p>Hazard Level: {feature.properties.level}</p>
                <p>Hazards: {feature.properties.hazards}</p>`;

            document.querySelector(".cardcontainer").appendChild(volcanoCard);
        });
    }

    displayVolcanoCards();
</script>

<Header />

<h1>Volcanic Activity</h1>


<div class="cardcontainer">

</div>


<Footer />

<style>
    
    * {
        padding: 0;
        margin: 0;
        font-family: sans-serif;
    }

    .cardcontainer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .volcanocard {
        border: 2px solid black;
        margin: 0.5em;
        padding: 0.5em;
        width: 20em;
    }

    #Taupo {
        background-color: red;
    }
</style>