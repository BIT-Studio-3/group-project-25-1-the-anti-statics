<script>

    import { selectedAgency } from '$lib/stores.js';




    import Map from '../lib/Map.svelte';
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
        background-color: #ECA869;
    }

    .AlertsList li {
        margin-top: 0.5em;
        list-style: none;
        padding-left: 0.5em;
        background-color: #ECA869;
    }

    .AlertsList em{
        background-color: #ECA869;
    }

    .AlertsCard h3{
        background-color: #ECA869;
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

    @media (max-width: 1200px) {
        /* For tablets and smaller desktops */
        .PageContentContainer {
            flex-direction: column; /* Stack the items vertically */
            align-items: center; /* Center items */
            gap: 10px;
        }

        .AlertsCard {
            width: 100%; /* Take full width on smaller screens */
            min-height: auto; /* Adjust height */
            margin-bottom: 1em; /* Add spacing between cards */
        }

        .pinmap {
            width: 100%; /* Make the map take full width */
            max-width: 500px; /* Limit map size */
        }
    }

    @media (max-width: 768px) {
        /* For mobile devices */
        .PageContentContainer {
            flex-direction: column; /* Stack the items vertically */
            align-items: center; /* Center items */
            gap: 15px;
        }

        .AlertsCard {
            width: 90%; /* Reduce the width to fit mobile screens */
            min-height: auto;
        }

        .pinmap {
            width: 100%; /* Make map fill the screen */
            max-width: 400px; /* Limit map size */
        }
    }

    @media (max-width: 480px) {
        /* For very small screens (phones in portrait mode) */
        .AlertsCard {
            width: 100%; /* Full width */
            padding: 0.5em; /* Reduce padding for mobile */
        }

        .pinmap {
            width: 100%; /* Full width for map */
            max-width: 300px; /* Limit map size on small screens */
        }
    }
</style>