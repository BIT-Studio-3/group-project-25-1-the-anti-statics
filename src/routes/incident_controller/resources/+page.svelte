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
    
    let searchQuery = "";
    let selectedType = "All Types";
    let selectedStatus = "All Statuses";
    
    $: filteredResources = resources.filter(resource => {
        const matchesSearch = searchQuery === "" || 
            resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.type.toLowerCase().includes(searchQuery.toLowerCase());
            
        const matchesType = selectedType === "All Types" || 
            resource.type === selectedType;
            
        const matchesStatus = selectedStatus === "All Statuses" || 
            resource.status === selectedStatus.toLowerCase();
            
        return matchesSearch && matchesType && matchesStatus;
    });
</script>

<main>
    <IncidentControl />
    <section id="container">
        <header>
            <h1>Resource Management</h1>
            <p class="subtitle">
                View and manage all available emergency response resources
            </p>
        </header>
                <div class="filters">
                    <select bind:value={selectedType}>
                        <option>All Types</option>
                        <option>Fire Truck</option>
                        <option>Medical Ambulance</option>
                        <option>Air Rescue</option>
                        <option>Water Rescue</option>
                    </select>

                    <select bind:value={selectedStatus}>
                        <option>All Statuses</option>
                        <option>Available</option>
                        <option>Dispatched</option>
                        <option>Maintenance</option>
                        <option>Unavailable</option>
                    </select>
    </section>
</main>
