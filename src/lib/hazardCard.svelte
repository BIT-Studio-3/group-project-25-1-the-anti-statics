<script>
    export let obj;
</script>

<div class="hazardCard">
    <h2>{obj.title}</h2>
    <h3>Hazard Type:</h3>
    <p>{obj.type}</p>
    <h3>Hazard Level:</h3>
    <p>{obj.level}</p>
    <h3>City:</h3>
    <p>{obj.city}</p>
    <h3>Description:</h3>
    <p>{obj.description}</p>
</div>

<style>
    .hazardCard {
        display: inline-block;
        border: solid;
        margin: 1em;
        padding: 1em;
        width: fit-content;
    }

    h3 {
        margin-top: 0.5em;
        font-size: medium;
        width: fit-content;
    }
    h2 {
        width: fit-content;
    }

    p{
        margin-top: 0.5em;
        width: fit-content;
    }

    @media (max-width: 400px) {
        .hazardCard {
            width: 36vh;
        }
    }
</style>