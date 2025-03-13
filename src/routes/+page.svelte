<script>

    import { selectedAgency } from '$lib/stores.js';




    import Map from '../lib/Map.svelte';

    //Export the load function
    export let data;
    const {alerts, error} = data;
</script>

<div class="PageContentContainer">
    <div class="AlertsCard">
        <h3>Recent Alerts</h3>
        <ul class="AlertsList">
            <li>A cave has collapsed in Southland<br>
                1 injury, 1 unknown<br>
            <em>1/11/2024 10:20am</em></li>
            <li>Theres been a mutiny in Nelson<br>
                <em>18/10/2024 9:32am</em></li>
        </ul>
    </div>

    <figure class="pinmap">
        <h3>Active Disasters</h3>
        <Map />
    </figure>
    
</div>

<style>

    h3 {
        margin-top: 0.5em;
        font-size: 180%;
        text-align: center;
    }

    img {
        max-height: 90%;
        width: auto;
    }

    .PageContentContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 100%;
        width: 100%;
    }

    .AlertsCard{
        display: flex;
        flex-direction: column;
        border: solid;
        width: 25em;
        min-height: 80vh;
        justify-self: left;
    }

    .AlertsList li {
        margin-top: 0.5em;
        list-style: none;
        padding-left: 0.5em;
    }

    .pinmap {
        max-height: 100%;
        width: 600px;
        border: solid;
        text-align: center;
        background-color: #B7DAF8;
    }

    .pinmap h3 {
        background-color: #B7DAF8;
    }

</style>