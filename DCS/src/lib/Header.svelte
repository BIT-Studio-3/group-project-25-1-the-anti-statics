<header>
    <h1>The GPTs Disaster Management System</h1>

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
    * {
        font-family: sans-serif;
        color: #444;
    }

    a {
        text-decoration: none;
    }

    header {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        position: relative;
        top: 0;
        box-shadow: 0 4px 5px #333;
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

    nav ul li {
        list-style: none;
        padding: 0.5em;
    }


</style>