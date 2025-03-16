<script>
    import { selectedAgency } from '$lib/stores.js';
    import AlertCard from '../lib/alertCard.svelte';
    import Map from '../lib/Map.svelte';

    let alerts = [
        {
            title: "Flood Warning",
            type: "Flood",
            level: "2",
            region: "Canterbury",
            description: "Heavy rain has caused flooding in the area. Please take caution."
        },
        {
            title: "Earthquake Alert",
            type: "Earthquake",
            level: "3",
            region: "Otago",
            description: "A 5.0 magnitude earthquake has been detected in the area."
        },
        {
            title: "Fire Watch",
            type: "Fire",
            level: "3",
            region: "Southland",
            description: "A fire warning has been issued for the area. Please take caution."
        }
    ];
</script>

<div class="PageContentContainer">
    <div class="AlertsCards">
        <h3>Recent Alerts</h3>
        <ul class="AlertsList">
            {#each alerts as alert}
                <li>
                    <AlertCard obj={alert} />
                </li>
            {/each}
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

    .PageContentContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 100%;
        width: 100%;
    }

    .AlertsCards{
        display: flex;
        flex-direction: column;
        border: solid;
        width: 50vh;
        height: 84vh;
        justify-self: left;
        overflow-y:auto;
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