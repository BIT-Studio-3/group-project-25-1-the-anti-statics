<script>
    import pfp from "/src/lib/Images/pfp.png";
    import icon from "/src/lib/SVGs/server-solid.svg";
</script>

<main>
    <section>
        <header>
            <img src={icon} alt="icon" height="40" />
            <h1>Incident Control</h1>
        </header>
        <ul>
            <li><a href="/incident_controller">📊 Create Incident</a></li>
            <li><a href="/incident_controller/users">👥 My Incidents</a></li>
            <li><a href="/incident_controller/logs">📁 My Teams</a></li>
            <li><a href="/incident_controller/logs">📁 Rescources</a></li>
        </ul>
        <section id="user">
            <img src={pfp} alt="pfp" height="60" />
            <section id="profile">
                <p>Admin User</p>
                <p>Incident Controller </p>
            </section>
        </section>
    </section>
</main>

<style>
    header {
        display: flex;
        align-items: center;
        margin-left: 1em;
    }
    main {
        background-color: rgb(1, 100, 1);
        border-right: 3px solid white;
    }
    section * {
        color: white;
    }
    h1 {
        padding: 1em;
    }
    #user {
        border-top: 2px solid green;
        border-bottom: 2px solid green;
        padding: 0.5em;
        display: flex;
        align-items: center;
    }
    #user p:nth-child(1) {
        font-size: larger;
    }
    #user p:nth-child(2) {
        font-size: small;
    }
    #profile {
        margin-left: 0.8em;
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 1em;
    }
    ul li {
        padding: 0.5em;
    }
    ul li a {
        display: flex;
        padding: 0.5em;
        text-decoration: none;
        transition:
            transform 0.3s,
            background-color 0.3s,
            color 0.3s;
        border-radius: 5px;
    }
    ul li a:hover {
        padding: 0.5em;
        color: #333;
        background-color: white;
        color: #333;
        transform: scale(1.1);
    }
</style>
