<script>
    export let obj;
</script>

<div class="alertCard">
    <h2>{obj.title}</h2>
    <h3>Emergency Type:</h3>
    <p>{obj.type}</p>
    <h3>Emergency Level:</h3>
    <p>{obj.level}</p>
    <h3>Region:</h3>
    <p>{obj.region}</p>
    <h3>Description:</h3>
    <p>{obj.description}</p>
</div>

<style>
    .alertCard {
        border: solid;
        margin: 1em;
        padding: 1em;
        width: 40vh;
    }

    h3 {
        margin-top: 0.5em;
    }

    p{
        margin-top: 0.5em;
    }

    @media (max-width: 400px) {
        .alertCard {
            width: 36vh;
        }
    }
</style>
