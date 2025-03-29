<script>
    import { page } from "$app/stores";

    $: route = $page.route.id;

    import AgencySelect from "$lib/agencySelect.svelte";
</script>

<header>
    <h1><a href="/">The Anti-Statics Disaster Management System</a></h1>

    <nav>
        <ul>
            <a href="/weather_reports_page" class="firstrow"><li class:active={route === "/weather_reports_page"}>Weather Reports</li></a>
            <a href="/seismic_reports_page" class="firstrow"><li class:active={route === "/seismic_reports_page"}>Seismic Activity</li></a>
            <a href="/road_conditions_page" class="firstrow"><li class:active={route === "/road_conditions_page"}>Road Conditions</li></a>
            <a href="/volcanic_activity_page" class="secondrow"><li class:active={route === "/volcanic_activity_page"}>Volcanic Activity</li></a>
            <a href="/fire_and_emergency_page" class="secondrow"><li class:active={route === "/fire_and_emergency_page"}>Fire and Emergency Reports</li></a>
            <a href="/rss" class="secondrow"><li class:active={route === "/rss"}>RSS Feed</li></a>
            <a href="/alert_system" class="secondrow"><li class:active={route === "/alert_system"}>Post an Alert</li></a>

            <AgencySelect />

            <a href="/Resources_Availability_Form" class="secondrow"><li class:active={route === "/Resources_Availability_Form"}>Resources_Availability_Form</li></a>

            <button id="log-out">Log Out</button>
        </ul>
    </nav>

</header>

<style>
*{
    background-color: #B5D5C5;
}
    a {
        text-decoration: none;
        background-color: inherit;
        border-right: 1px solid grey;
        align-self: center;
    }

    a:last-child {
        border-right: 0px;
    }

    h1 a {
        border-right: 0px;
    }

    header {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        max-width: 100%;
        position: relative;
        top: 0;
        box-shadow: 0 4px 5px #333;
        padding: 2em;
        margin-bottom: 0.5em;
        box-sizing: border-box;
    }

    nav {
        display: flex;
        flex-direction: row;
    }

    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
    }

    li {
        list-style: none;
        padding: 0.5em;
        font-size: 120%;
        text-align: center;
    }

    nav ul li:hover {
        background-color: lightgrey;
    }

    .active {
        background-color: #689FD4;
        font-weight: bold;
    }

    @media (max-width: 800px) {

        header {
            padding: 1em;
        }

        ul {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            justify-content: stretch;
        }
        a:last-child {
            border-right: 1px solid grey;
        }
    }

    @media (max-width: 600px) {
        h1 {
            display: none;
        }

        header {
            font-size: 70%;
        }
    }

#log-out{
    padding: 0em 3em 0em 3em;
    background-color: white;
    font-weight: bold;
}
</style>