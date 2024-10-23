<header>
    <h1>The GPTs Disaster Management System</h1>

    <nav>
        <ul>
            <li><a href="/weather_reports_page">Weather Reports</a></li>
            <li><a href="/seismic_reports_page">Seismic Activity</a></li>
            <li><a href="/road_conditions_page">Road Conditions</a></li>
            <li><a href="/tides_page">Tidal Data</a></li>
            <li><a href="/volcanic_acticity_page">Volcanic Activity</a></li>
            <li><a href="/fire_and_emergency_page">Fire and Emergency Reports</a></li>
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
        width: 100%;
        position: relative;
        top: 0;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
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
        flex-flow: space-around;
    }

    nav ul li {
        list-style: none;
        padding: 0.5em;
        white-space: nowrap;
    }
    @media(max-height:1024px){
        h1{
            white-space: nowrap;
            font-size:larger;
        }
    }

</style>