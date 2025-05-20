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

        <div class="content">
            <div class="search-filters">
                <div class="search-input">
                    <div class="input-wrapper">
                        <input
                            type="text"
                            bind:value={searchQuery}
                            placeholder="Search resources..."
                        />
                        <span class="input-icon">
                            <svg
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <path d="M21 21l-4.35-4.35" />
                            </svg>
                        </span>
                    </div>
                </div>

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
                </div>
            </div>

            <div class="resources-list">
                <div class="resources-header">
                    <h3>
                        Available Resources <span class="resource-count"
                            >{filteredResources.length}</span
                        >
                    </h3>
                </div>

                <div class="resources-container">
                    {#each filteredResources as resource (resource.id)}
                        <div class="resource-card status-{resource.status}">
                            <div class="resource-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    {#if resource.icon === "truck"}
                                        <path d="M1 3h15v13H1z" />
                                        <path d="M16 8h4l3 3v5h-7V8z" />
                                        <circle cx="5.5" cy="18.5" r="2.5" />
                                        <circle cx="18.5" cy="18.5" r="2.5" />
                                    {:else if resource.icon === "ambulance"}
                                        <path d="M1 8h17v8H1z" />
                                        <path d="M18 8h2l3 3v5h-5V8z" />
                                        <path d="M6 12h4" />
                                        <path d="M8 10v4" />
                                        <circle cx="5.5" cy="18.5" r="2.5" />
                                        <circle cx="18.5" cy="18.5" r="2.5" />
                                    {:else if resource.icon === "helicopter"}
                                        <path
                                            d="M12 4c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2z"
                                        />
                                        <path d="M10 6v12" />
                                        <path d="M4 16h12" />
                                        <path d="M3 10h14" />
                                    {:else if resource.icon === "ship"}
                                        <path
                                            d="M2 20a6 6 0 0 0 12 0c6 0 4-9 4-9H6s-2 9 4 9"
                                        />
                                        <path
                                            d="M12 8V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v3"
                                        />
                                    {/if}
                                </svg>
                            </div>

                            <div class="resource-info">
                                <div class="resource-header">
                                    <h4>{resource.name}</h4>
                                    <span
                                        class="status-badge status-{resource.status}"
                                        >{resource.status}</span
                                    >
                                </div>

    </section>
</main>
