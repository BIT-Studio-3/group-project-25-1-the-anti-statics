<script>
    import IncidentControl from "../../../lib/IncidentControl.svelte";
    import { postTeam } from "../post-function/postTeam.js";

    let postError = "";
    let info = null;
    let error = "";

    let disasterId = "";
    let teamInfo = { disasterId: "" };

    const submitTeam = async (event) => {
        event.preventDefault();
        const teams = teamInfo;
        teamInfo.disasterId = disasterId; 
        const result = await postTeam(teams);

        postError = result.postError;
        info = result.info;
        error = result.error;

        console.log("Result from postTeam:", result);
        console.log("Post error:", postError);
        console.log("Post info:", info);
        console.log("Error:", error);

        if (result.info) {
            alert("Team posted successfully!");

            teamInfo.disasterId = "";
        }
    };
    export let data;
    console.log(data);
    //const { teams } = data;
</script>

<main>
    <IncidentControl />
    <section id="container">
        <header>
            <h1>New Response Team</h1>
            <p class="subtitle">
                Create and track disaster response teams efficiently
            </p>
        </header>

        <div class="form-container">
            <form on:submit={submitTeam}>
                <h3>Create An Emergency Response Team</h3>

                <div class="form-group">
                    <label for="disasterId"
                        >Disaster ID <span class="required">*</span></label
                    >
                    <div class="input-wrapper">
                        <input
                            type="text"
                            id="disasterId"
                            bind:value={disasterId}
                            placeholder="Enter unique disaster identifier"
                            required
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
                                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                <path d="M2 17l10 5 10-5" />
                                <path d="M2 12l10 5 10-5" />
                            </svg>
                        </span>
                    </div>
                    <p class="help-text">
                        Unique identifier assigned to this incident
                    </p>
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
        max-width: 700px;
        margin: 2em auto;
        background-color: white;
        padding: 2em;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        border-left: 4px solid #036d23;
    }

    h3 {
        text-align: center;
        margin-bottom: 1.5em;
        font-size: 1.5rem;
        color: #333;
        font-weight: 600;
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

    .input-wrapper {
        position: relative;
    }

    .input-icon {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        color: #759671;
    }

    .required {
        color: #e53e3e;
    }

    .help-text {
        font-size: 0.8rem;
        color: #718096;
        margin-top: 0.4rem;
    }

    .form-group input {
        width: 100%;
        padding: 0.8rem;
        font-size: 0.95rem;
        border: 2px solid #e2e8f0;
        border-radius: 4px;
        outline: none;
        box-sizing: border-box;
        transition: all 0.2s;
    }

    .form-group input:focus {
        border-color: #4caf50;
        box-shadow: 0 0 6px rgba(76, 175, 80, 0.5);
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
        main {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;
        }

        #container {
            height: auto;
            min-height: 500px;
            overflow-y: auto;
        }

        .form-container {
            padding: 1.5em;
            margin: 1em auto;
            width: 90%;
        }

        header h1 {
            font-size: 1.5rem;
        }

        h3 {
            font-size: 1.2rem;
        }

        .form-group {
            display: flex;
            flex-direction: column;
        }

        .form-group input {
            padding: 0.6rem;
            font-size: 0.9rem;
        }

        .form-button {
            padding: 0.6rem 1.5rem;
            font-size: 0.9rem;
            width: 100%;
        }
    }

    @media (max-width: 480px) {
        .form-container {
            padding: 1em;
            margin: 0.5em auto;
            border-left-width: 2px;
        }

        header {
            padding: 0.8em;
        }

        header h1 {
            font-size: 1.3rem;
        }

        header .subtitle {
            font-size: 0.8rem;
        }

        h3 {
            font-size: 1rem;
            margin-bottom: 1em;
        }

        .form-group label {
            font-size: 0.85rem;
        }

        .form-group input {
            padding: 0.5rem;
            font-size: 0.85rem;
        }

        .help-text {
            font-size: 0.7rem;
        }

        .button-wrapper {
            margin-top: 1.5rem;
        }

        .form-button {
            font-size: 0.85rem;
            padding: 0.6rem 1rem;
        }
    }
</style>