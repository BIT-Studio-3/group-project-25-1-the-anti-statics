<script>
    import IncidentControl from "../../lib/IncidentControl.svelte";

    let disaster = {
        title: "",
        type: "",
        location: "",
        description: "",
        status: "",
        severity: "",
        controllerId: "",
        startTime: "",
        endTime: "",
    };

    const disasterTypes = [
        "FLOOD",
        "EARTHQUAKE",
        "FIRE",
        "CYCLONE",
        "TSUNAMI",
        "LANDSLIDE",
        "VOLCANIC",
        "OTHER",
    ];

    const disasterStatuses = ["ACTIVE", "CONTAINED", "RESOLVED"];
    const disasterSeverities = ["LOW", "MODERATE", "HIGH", "CRITICAL"];
</script>

<main>
    <IncidentControl />
    <section id="container">
        <header>
            <h1>Create New Incident</h1>
            <br />
            <p>Report and track issues efficiently</p>
        </header>
    </section>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: 1fr 2.3fr;
    }
    #container {
        background-color: rgba(255, 255, 255, 0.5);
        overflow-x: hidden;
        height: 85vh;
    }
    header {
        background-color: white;
        padding: 1em;
        border-bottom: 1px solid rgb(182, 164, 164);
        display: flex;
        gap: 1em;
        align-items: center;
    }
</style>
