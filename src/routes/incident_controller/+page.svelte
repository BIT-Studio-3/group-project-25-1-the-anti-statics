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
                            <label for="title">Title <span class="required">*</span></label>
                                <input
                                    type="text"
                                    id="title"
                                    bind:value={disasterInfo.title}
                                    placeholder="Brief description of the incident"
                                    required
                                />
                            </div>

                            <div class="form-group">
                            <label for="type">Type <span class="required">*</span></label>
                                <select
                                    id="type"
                                    bind:value={disasterInfo.type}
                                    required
                                >
                                <option value="" disabled>Select disaster type</option>
                                    {#each disasterTypes as type}
                                        <option value={type}>{type}</option>
                                    {/each}
                                </select>
                            </div>

                            <div class="form-group">
                            <label for="location">Location <span class="required">*</span></label>
                                <input
                                    type="text"
                                    id="location"
                                    bind:value={disasterInfo.location}
                                    placeholder="Enter location (e.g., coordinates, street)"
                                    required
                                />
                            </div>

                            <div class="form-group">
                            <label for="status">Status <span class="required">*</span></label>
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

                            <div class="form-group">
                            <label for="severity">Severity <span class="required">*</span></label>
                                <select
                                    id="severity"
                                    bind:value={disasterInfo.severity}
                                    required
                                >
                                <option value="" disabled>Select severity</option>
                                    {#each disasterSeverities as severity}
                                        <option value={severity}>{severity}</option>
                                    {/each}
                                </select>
                            </div>

                            <div class="form-group">
                            <label for="controllerId">Controller ID <span class="required">*</span></label>
                                <input
                                    type="text"
                                    id="controllerId"
                                    bind:value={disasterInfo.controllerId}
                                    placeholder="Enter controller ID"
                                    required
                                />
                            </div>

                            <div class="form-group">
                            <label for="startTime">Start Time <span class="required">*</span></label>
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
                    <label for="description">Description <span class="required">*</span></label>
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
    <p class="error">{postError}</p>
{/if}

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
    #container div {
        padding: 1em;
    }
    header {
        background-color: white;
        padding: 1em;
        border-bottom: 1px solid rgb(182, 164, 164);
        display: flex;
        gap: 1em;
        align-items: center;
    }
    .form-container {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        background-color: #f9f9f9;
        padding: 2em;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    main {
        display: grid;
        grid-template-columns: 1fr 2.3fr;
        height: 100%;
    }

    h3 {
        text-align: center;
        margin-bottom: 1.5em;
        font-size: 1.5em;
        color: #333;
    }

    .form-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5em;
    }

    .full-width {
        grid-column: 1 / -1;
    }

    .form-group {
        margin-bottom: 1em;
    }

    .form-group label {
        font-weight: bold;
        margin-bottom: 0.5em;
        display: block;
        color: #555;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 0.8em;
        font-size: 1em;
        border: 1px solid #ccc;
        border-radius: 4px;
        outline: none;
        box-sizing: border-box;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        border-color: #007bff;
        box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
    }

    .form-group textarea {
        resize: vertical;
        min-height: 100px;
    }

    .button-wrapper {
        text-align: center;
        margin-top: 1.5em;
    }

    .form-button {
        background-color: #007bff;
        color: white;
        padding: 0.8em 1.5em;
        font-size: 1em;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .form-button:hover {
        background-color: #0056b3;
    }

    .error {
        margin-top: 1em;
        color: red;
        font-weight: bold;
        text-align: center;
    }
</style>
