<script>
    import IncidentControl from "../../../lib/IncidentControl.svelte";
import { isDark } from '/src/stores/theme.js';

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

    $: filteredResources = resources.filter((resource) => {
        const matchesSearch =
            searchQuery === "" ||
            resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.type.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesType =
            selectedType === "All Types" || resource.type === selectedType;

        const matchesStatus =
            selectedStatus === "All Statuses" ||
            resource.status === selectedStatus.toLowerCase();

        return matchesSearch && matchesType && matchesStatus;
    });
</script>

<main class:dark={$isDark}>
    <IncidentControl />
    <section id="container" class:dark={$isDark}>
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

                                <div class="resource-details">
                                    <div class="detail-grid">
                                        <div>
                                            <span class="detail-label"
                                                >Type:</span
                                            >
                                            {resource.type}
                                        </div>
                                        <div>
                                            <span class="detail-label"
                                                >Location:</span
                                            >
                                            {resource.location}
                                        </div>

                                        {#if resource.lastCheck}
                                            <div>
                                                <span class="detail-label"
                                                    >Last Check:</span
                                                >
                                                {resource.lastCheck}
                                            </div>
                                        {/if}

                                        {#if resource.eta}
                                            <div>
                                                <span class="detail-label"
                                                    >ETA:</span
                                                >
                                                {resource.eta}
                                            </div>
                                        {/if}

                                        {#if resource.estReady}
                                            <div>
                                                <span class="detail-label"
                                                    >Est. Ready:</span
                                                >
                                                {resource.estReady}
                                            </div>
                                        {/if}

                                        {#if resource.issue}
                                            <div>
                                                <span class="detail-label"
                                                    >Issue:</span
                                                >
                                                {resource.issue}
                                            </div>
                                        {/if}

                                        <div>
                                            <span class="detail-label"
                                                >Crew:</span
                                            >
                                            {resource.crew}
                                        </div>
                                    </div>
                                </div>

                                <div class="resource-actions">
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="16"
                                        height="16"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 8v4" />
                                        <path d="M12 16h.01" />
                                    </svg>
                                    Details

                                    {#if resource.status === "available"}
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="16"
                                            height="16"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path d="M22 2L11 13" />
                                            <path
                                                d="M22 2l-7 20-4-9-9-4 20-7z"
                                            />
                                        </svg>
                                        Dispatch
                                    {:else if resource.status === "dispatched"}
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="16"
                                            height="16"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                                            />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        Track
                                    {:else}
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="16"
                                            height="16"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                            <path
                                                d="M17 21h-10a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"
                                            />
                                            <path d="M9 9h1" />
                                            <path d="M9 13h6" />
                                            <path d="M9 17h6" />
                                        </svg>
                                        Update Status
                                    {/if}
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </section>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: 1fr 3fr;
        height: 100%;
    }

    #container {
        background-color: rgba(255, 255, 255, 0.5);
        overflow-x: hidden;
        height: 85vh;
        overflow-y: auto;
    }

    header {
        background-color: white;
        padding: 1em;
        border-bottom: 1px solid rgb(182, 164, 164);
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }

    header h1 {
        font-size: 1.8rem;
        color: #333;
        margin: 0;
    }

    header .subtitle {
        color: #666666f1;
        font-size: 0.9rem;
        margin: 0;
    }

    .content {
        padding: 1rem;
    }

    .search-filters {
        background-color: white;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        margin-bottom: 1.5rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: center;
    }

    .search-input {
        flex: 2;
        min-width: 40%;
    }

    .filters {
        flex: 2;
        display: flex;
        gap: 0.5rem;
    }

    .filters select {
        flex: 1;
        padding: 0.6rem;
        border: 1px solid #e2e8f0;
        border-radius: 4px;
        background-color: white;
        font-size: 0.9rem;
    }

    .input-wrapper {
        position: relative;
    }

    .input-wrapper input {
        width: 85%;
        padding: 0.6rem;
        padding-left: 2.5rem;
        font-size: 0.9rem;
        border: 1px solid #e2e8f0;
        border-radius: 4px;
        outline: none;
    }

    .input-wrapper .input-icon {
        position: absolute;
        left: 0.8rem;
        top: 50%;
        transform: translateY(-50%);
        color: #759671;
    }

    .resources-list {
        width: 100%;
    }

    .resources-header {
        background-color: white;
        padding: 1rem;
        border-radius: 8px 8px 0 0;
        border-bottom: 1px solid #e2e8f0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }

    .resources-header h3 {
        font-size: 1.1rem;
        margin: 0;
        color: #333;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .resource-count {
        background-color: #eef2ff;
        color: #4f46e5;
        font-size: 0.8rem;
        padding: 0.2rem 0.5rem;
        border-radius: 9999px;
    }

    .resources-container {
        background-color: white;
        border-radius: 0 0 8px 8px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .resource-card {
        padding: 1rem;
        border-bottom: 1px solid #e2e8f0;
        display: flex;
        gap: 1rem;
        transition: all 0.2s ease;
    }

    .resource-card:hover {
        background-color: #f9fafb;
        transform: translateY(-2px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .resource-card.status-available {
        border-left: 4px solid #10b981;
    }

    .resource-card.status-dispatched {
        border-left: 4px solid #f59e0b;
    }

    .resource-card.status-maintenance {
        border-left: 4px solid #6366f1;
    }

    .resource-card.status-unavailable {
        border-left: 4px solid #ef4444;
    }

    .resource-icon {
        width: 40px;
        height: 40px;
        background-color: #eef2ff;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        color: #4f46e5;
    }

    .resource-info {
        flex: 1;
    }

    .resource-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
    }

    .resource-header h4 {
        margin: 0;
        font-size: 1rem;
        color: #333;
    }

    .status-badge {
        padding: 0.2rem 0.5rem;
        border-radius: 9999px;
        font-size: 0.7rem;
        font-weight: 500;
        text-transform: capitalize;
    }

    .status-badge.status-available {
        background-color: #d1fae5;
        color: #047857;
    }

    .status-badge.status-dispatched {
        background-color: #fef3c7;
        color: #b45309;
    }

    .status-badge.status-maintenance {
        background-color: #e0e7ff;
        color: #4f46e5;
    }

    .status-badge.status-unavailable {
        background-color: #fee2e2;
        color: #b91c1c;
    }

    .resource-details {
        font-size: 0.9rem;
        color: #666;
        margin-bottom: 1rem;
    }

    .detail-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 0.5rem;
    }

    .detail-label {
        font-weight: 500;
        color: #4b5563;
    }

    .resource-actions {
        display: flex;
        gap: 0.5rem;
    }

    /* DARK MODE */
    .dark,
.dark * {
  color: white !important;
  fill: white !important;
  stroke: white !important;
}

.dark .resource-count {
  background-color: white !important;
  color: black !important;
}

.dark .status-badge {
  color: initial !important;
}

.dark header,
.dark .search-filters,
.dark .resources-header,
.dark .resources-container,
.dark .resource-card {
  background-color: #1e1e1e;
  color: #f5f5f5;
}

.dark .filters select,
.dark .input-wrapper input {
  background-color: #2a2a2a;
  color: #f5f5f5;
  border-color: #444;
}

.dark .resource-card:hover {
  background-color: #2c2c2c;
}

.dark .resource-icon {
  background-color: #333;
  color: #fff;
}

.dark .status-badge.status-available {
  background-color: #14532d;
  color: #bbf7d0;
}

.dark .status-badge.status-dispatched {
  background-color: #78350f;
  color: #fde68a;
}

.dark .status-badge.status-maintenance {
  background-color: #312e81;
  color: #c7d2fe;
}

.dark .status-badge.status-unavailable {
  background-color: #7f1d1d;
  color: #fecaca;
}

    @media (max-width: 768px) {
        main {
            grid-template-columns: 1fr;
        }

        .detail-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
