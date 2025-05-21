<script>
    import IncidentControl from "../../lib/IncidentControl.svelte";
    import { postDisaster } from "./post-function/postDisaster.js";

    let postError = "";
    let info = null;
    let error = "";

    let disasterInfo = {
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

    const submitIncident = async (event) => {
        event.preventDefault();
        const incidentInfo = disasterInfo;
        const result = await postDisaster(incidentInfo);

        postError = result.postError;
        info = result.info;
        error = result.error;

        if (result.info) {
            alert("Disaster posted successfully!");

            disasterInfo.title = "";
            disasterInfo.type = "";
            disasterInfo.location = "";
            disasterInfo.description = "";
            disasterInfo.status = "";
            disasterInfo.severity = "";
            disasterInfo.controllerId = "";
            disasterInfo.startTime = "";
            disasterInfo.endTime = "";
        }
    };
    export let data;
    console.log(data);
    const { disasters } = data;
</script>

<main>
    <IncidentControl />
    <section id="container">
        <header>
            <h1>Create New Incident</h1>
            <p class="subtitle">Report and track disasters efficiently</p>
        </header>

        <div class="form-container">
            <form on:submit={submitIncident}>
                <h3>Log a Disaster</h3>

                <div class="form-grid">
                    <div class="form-column">
                        <div class="form-group">
                            <label for="title"
                                >Title <span class="required">*</span></label
                            >
                            <input
                                type="text"
                                id="title"
                                bind:value={disasterInfo.title}
                                placeholder="Brief description of the incident"
                                required
                            />
                        </div>

                        <div class="form-group">
                            <label for="type"
                                >Type <span class="required">*</span></label
                            >
                            <select
                                id="type"
                                bind:value={disasterInfo.type}
                                required
                            >
                                <option value="" disabled
                                    >Select disaster type</option
                                >
                                {#each disasterTypes as type}
                                    <option value={type}>{type}</option>
                                {/each}
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="location"
                                >Location <span class="required">*</span></label
                            >
                            <input
                                type="text"
                                id="location"
                                bind:value={disasterInfo.location}
                                placeholder="Enter location (e.g., coordinates, street)"
                                required
                            />
                        </div>

                        <div class="form-group">
                            <label for="status"
                                >Status <span class="required">*</span></label
                            >
                            <select
                                id="status"
                                bind:value={disasterInfo.status}
                                required
                            >
                                <option value="" disabled>Select status</option>
                                {#each disasterStatuses as status}
                                    <option value={status}>{status}</option>
                                {/each}
                            </select>
                        </div>
                    </div>

                    <div class="form-column">
                        <div class="form-group">
                            <label for="severity"
                                >Severity <span class="required">*</span></label
                            >
                            <select
                                id="severity"
                                bind:value={disasterInfo.severity}
                                required
                            >
                                <option value="" disabled
                                    >Select severity</option
                                >
                                {#each disasterSeverities as severity}
                                    <option value={severity}>{severity}</option>
                                {/each}
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="controllerId"
                                >Controller ID <span class="required">*</span
                                ></label
                            >
                            <input
                                type="text"
                                id="controllerId"
                                bind:value={disasterInfo.controllerId}
                                placeholder="Enter controller ID"
                                required
                            />
                        </div>

                        <div class="form-group">
                            <label for="startTime"
                                >Start Time <span class="required">*</span
                                ></label
                            >
                            <input
                                type="datetime-local"
                                id="startTime"
                                bind:value={disasterInfo.startTime}
                                required
                            />
                        </div>

                        <div class="form-group">
                            <label for="endTime">End Time</label>
                            <input
                                type="datetime-local"
                                id="endTime"
                                bind:value={disasterInfo.endTime}
                            />
                        </div>
                    </div>
                </div>

                <div class="form-group full-width">
                    <label for="description"
                        >Description <span class="required">*</span></label
                    >
                    <textarea
                        id="description"
                        bind:value={disasterInfo.description}
                        placeholder="Provide a detailed description of the disaster"
                        required
                    ></textarea>
                </div>

                <div class="button-wrapper">
                    <button type="submit" class="form-button">Submit</button>
                </div>
            </form>
        </div>
    </section>
</main>

{#if postError}
    <div class="error-message">
        <p>{postError}</p>
    </div>
{/if}

<style>
    main {
        display: grid;
        grid-template-columns: 1fr 2.3fr;
        height: 100%;
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

    .form-container {
        width: 100%;
        max-width: 900px;
        margin: 2em auto;
        background-color: white;
        padding: 2em;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    h3 {
        text-align: center;
        margin-bottom: 1.5em;
        font-size: 1.5rem;
        color: #333;
        font-weight: 600;
    }

    .form-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
    }

    .form-column {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .form-group {
        margin-bottom: 1rem;
    }

    .form-group label {
        display: block;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: #444;
        font-size: 0.9rem;
    }

    .full-width {
        grid-column: 1 / span 2;
        margin-top: 1rem;
    }

    .required {
        color: #e53e3e;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 0.8rem;
        font-size: 0.95rem;
        border: 2px solid #e2e8f0;
        border-radius: 4px;
        outline: none;
        box-sizing: border-box;
        transition: all 0.2s;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        border-color: #4caf50;
        box-shadow: 0 0 6px rgba(76, 175, 80, 0.5);
    }

    .form-group textarea {
        resize: vertical;
        min-height: 120px;
    }

    .button-wrapper {
        text-align: center;
        margin-top: 2rem;
        padding-top: 1rem;
        border-top: 1px solid #eee;
    }

    .form-button {
        background-color: #138f19;
        color: white;
        padding: 0.8rem 1.8rem;
        font-size: 1rem;
        font-weight: 600;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .form-button:hover {
        background-color: #45a049;
        transform: translateY(-0.5px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    #description {
        resize: none;
    }

    .error-message {
        background-color: #f56565;
        color: white;
        padding: 0.8rem;
        margin: 1rem auto;
        border-radius: 4px;
        max-width: 800px;
        text-align: center;
        font-weight: 600;
    }

    @media (max-width: 768px) {
        .form-grid {
            grid-template-columns: 1fr;
        }

        .form-container {
            max-width: 100%;
        }
    }
</style>
