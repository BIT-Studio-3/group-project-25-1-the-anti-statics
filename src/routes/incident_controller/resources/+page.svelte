<script>
    import IncidentControl from "../../../lib/IncidentControl.svelte";

    const resources = [
        {
            id: "rt12",
            name: "Rescue Truck #12",
            type: "Fire Truck",
            status: "available",
            location: "Station 5",
            lastCheck: "2 hours ago",
            crew: "4 personnel",
            icon: "truck",
        },
        {
            id: "am7",
            name: "Ambulance #7",
            type: "Medical Ambulance",
            status: "dispatched",
            location: "En route to incident",
            eta: "12 minutes",
            crew: "2 personnel",
            icon: "ambulance",
        },
        {
            id: "rh1",
            name: "Rescue Helicopter #1",
            type: "Air Rescue",
            status: "maintenance",
            location: "Hangar 3",
            estReady: "2 days",
            crew: "3 personnel",
            icon: "helicopter",
        },
        {
            id: "rb3",
            name: "Rescue Boat #3",
            type: "Water Rescue",
            status: "unavailable",
            location: "Dock B",
            issue: "Engine repair",
            crew: "4 personnel",
            icon: "ship",
        },
    ];
</script>

<main>
 <IncidentControl />


</main>
