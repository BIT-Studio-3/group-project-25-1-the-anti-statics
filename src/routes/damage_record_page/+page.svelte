<script>
    import DamageCard from "../../lib/damageCard.svelte";
    import { postDamage } from "./post-functions/postDamage.js"; // Import the postDamage function

    let postError = "";
    let info = null;
    let error = "";

    let name = "";
    let type = "";
    let level = "";
    let location = "";
    let count = "";
    let cause = "";

    const submitDamage = async (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page

        const damageData = {
            reporterName: name,
            damageType: type,
            damageLevel: level,
            location: location,
            countAffected: count,
            cause: cause,
        };

        const result = await postDamage(damageData);

        postError = result.postError;
        info = result.info;
        error = result.error;

        console.log("Result from postDamage:", result);
        console.log("Post error:", postError);
        console.log("Post data:", info);
        console.log("Error:", error);

        if (result.info) {
            alert("Damage posted successfully!");
            name = "";
            type = "";
            level = "";
            location = "";
            count = "";
            cause = "";
        }
    };

    export let data;
    const { damages } = data;
</script>

<h1>Damage Log</h1>

<form on:submit={submitDamage}>
    <h2>Post Damage:</h2>
    <div class="container">
        <label for="title">Reporter Name:</label>
        <input type="text" id="reporterName" bind:value={name} required />

        <label for="type">Damage type:</label>
        <select bind:value={type} required>
            <option value="">Please select damage type</option>
            <option value="Residential">Residential</option>
            <option value="Environmental">Environmental</option>
            <option value="Vehicle">Vehicle</option>
            <option value="Public Facilities">Public Facilities</option>
        </select>

        <label for="level">Select damage level:</label>
        <select bind:value={level} required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>

        <label for="location">Choose location:</label>
        <select bind:value={location} required>
            <option value="">Please select location of damage</option>
            <option value="Otago">Otago</option>
            <option value="Canterbury">Canterbury</option>
            <option value="Southland">Southland</option>
        </select>

        <label for="countAffected"
            >Choose the range of individuals affected:</label
        >
        <select bind:value={count} required>
            <option value="1">less than 5</option>
            <option value="2">5</option>
            <option value="3">10</option>
            <option value="4">20</option>
            <option value="5">50</option>
            <option value="6">100</option>
        </select>

        <label for="cause">Possible cause of damage :</label>
        <textarea id="cause" bind:value={cause} required></textarea>
    </div>
    <div>
        <button type="submit">Submit</button>
    </div>
</form>

{#if postError}
    <p style="color: red;">{postError}</p>
{/if}

{#if error}
    <p style="color: red;">{error}</p>
{/if}

{#if info}
    <p style="color: green;">The damage has been logged successfully!</p>
{/if}




<div class="damagelogs">

    {#if !data.damages || data.damages.length === 0}
    <p>No damages logged</p>
    {:else}
    <h3>Logged damages</h3>
    <ul class="damagelogs">
        {#each damages as damage}
            <li>
                <DamageCard obj={damage} />
            </li>
        {/each}
    </ul>
    {/if}
</div>


<style>
    * {
        font-family: sans-serif;
        color: #333;
    }
    textarea {
        vertical-align: top;
        height: 10em;
        width: 25em;
    }
    form {
        border-color: black;
        border: solid;
        padding: 1em;
        background-color: #eca869;
    }
    label {
        text-align: right;
        justify-content: center;
        padding-top: 10px;
    }
    div {
        padding: 0.5em;
    }

    .damagelogs {
        border-color: black;
        border: solid;
        display: grid;
        grid-template-columns: auto;
        max-height: fit-content;
    }
    .damagelogs ul {
        max-height: 70vh;
        overflow-y: auto;
    }
    .damagelogs li {
        margin-top: 0.5em;
        list-style: none;
        padding-left: 0.5em;
        float: left;
    }
    .container {
        display: grid;
        grid-template-columns: 10% 90%;
    }
    input {
        max-width: fit-content;
        margin: 0.5em;
    }
    select {
        max-width: fit-content;
        margin: 0.5em;
    }
    textarea {
        margin: 0.5em;
    }
    @media (max-width: 1200px) {
        .container {
            display: block; /* Stack the form fields vertically */
        }

        textarea {
            width: 100%; /* Ensure textarea takes full width */
        }

        label {
            align-self: center; /* Align labels properly */
        }

        input,
        select {
            width: 100%; /* Ensure input/select fields take full width */
            margin: 0.5em 0; /* Add space between fields */
        }
    }

    /* For mobile devices (phones in portrait mode) */
    @media (max-width: 768px) {
        textarea {
            width: 100%; /* Ensure textarea takes full width on small screens */
        }

        .container {
            display: block; /* Stack the form fields vertically */
        }

        label {
            font-size: 0.9em; /* Adjust font size for labels */
            text-align: left; /* Align labels to the left on mobile */
        }

        input,
        select {
            width: 100%; /* Ensure input/select fields take full width */
            margin: 0.5em 0; /* Add space between fields */
        }

        button {
            width: 100%; /* Ensure the submit button takes full width */
            padding: 1em; /* Add padding for better usability */
        }
    }

    /* For very small screens (phones in portrait mode) */
    @media (max-width: 480px) {
        label {
            font-size: 0.85em; /* Further reduce label font size */
        }

        input,
        select {
            width: 100%; /* Ensure input/select fields take full width */
        }

        button {
            padding: 1em; /* Ensure button is touch-friendly */
            font-size: 1em; /* Adjust font size for button */
        }
    }
</style>
