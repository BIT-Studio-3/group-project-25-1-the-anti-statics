<script>
    export let obj;
</script>

<div class="damageCard">
    <h2>{obj.name}</h2>
    <h3>Damage Type:</h3>
    <p>{obj.type}</p>
    <h3>Level of damage:</h3>
    <p>{obj.level}</p>
    <h3>Location:</h3>
    <p>{obj.location}</p>
    <h3>Number of individuals affected:</h3>
    <p>{obj.count}</p>
    <h3>Description:</h3>
    <p>{obj.cause}</p>
</div>

<style>
    .damageCard {
        display: inline-block;
        border: solid;
        margin: 1em;
        padding: 1em;
        width: fit-content;
        max-width: 17em;
        margin: 0.5em;
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
        .damageCard {
            width: 36vh;
        }
    }
</style>