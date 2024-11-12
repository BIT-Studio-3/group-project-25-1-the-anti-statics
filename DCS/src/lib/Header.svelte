<script>
    import { page } from "$app/stores";

    $: route = $page.route.id;
</script>

<header>
    <h1><a href="/">The GPTs Disaster Management System</a></h1>

    <nav>
        <ul>
            <a href="/weather_reports_page"><li class:active={route === "/weather_reports_page"}>Weather Reports</li></a>
            <a href="/seismic_reports_page"><li class:active={route === "/seismic_reports_page"}>Seismic Activity</li></a>
            <a href="/road_conditions_page"><li class:active={route === "/road_conditions_page"}>Road Conditions</li></a>
            <a href="/volcanic_activity_page"><li class:active={route === "/volcanic_activity_page"}>Volcanic Activity</li></a>
            <a href="/fire_and_emergency_page"><li class:active={route === "/fire_and_emergency_page"}>Fire and Emergency Reports</li></a>
            <a href="/rss"><li class:active={route === "/rss"}>RSS Feed</li></a>
            <a href="/Alerts"><li class:active={route === "/Alerts"}>Post an Alert</li></a>
        </ul>
    </nav>

</header>

<style>

    a {
        text-decoration: none;
        background-color: inherit;
        border-right: 1px solid grey;
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
        width: calc(100% - 4em);
        position: relative;
        top: 0;
        box-shadow: 0 4px 5px #333;
        padding: 2em;
        margin-bottom: 0.5em;
    }

    nav {
        display: flex;
        flex-direction: row;
    }

    nav ul {
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


</style>