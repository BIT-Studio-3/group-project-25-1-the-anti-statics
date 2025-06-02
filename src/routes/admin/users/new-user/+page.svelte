<script>
    //Import post user function
    import { postUser } from "./utils/postUser.js"; // Import the postUser function
    import FormLayout from "../../../../lib/formLayout.svelte";
    import { isDark } from "../../../../stores/theme.js";

    //Import post user function variables
    let postError = "";
    let data = null;
    let error = "";

    let firstName = "";
    let lastName = "";
    let emailAddress = "";
    let password = "";
    let organization = "";
    let role = "";

    // Function to handle form submission
    const submitUser = async (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page

        // Form data object
        const userData = {
            firstName,
            lastName,
            emailAddress,
            password,
            organization,
            role: role,
        };

        // Call the postUser function and use the result directly
        const result = await postUser(userData);

        // Update the state with the result values directly
        postError = result.postError;
        data = result.data;
        error = result.error;

        // Log the result for debugging
        console.log("Result from postUser:", result);
        console.log("Post error:", postError);
        console.log("Post data:", data);
        console.log("Error:", error);

        if (result.data) {
            user("User posted successfully!");

            // Reset form fields
            let firstName = "";
            let lastName = "";
            let emailAddress = "";
            let password = "";
            let organization = "";
            let role = "";
        }
    };
</script>

<main class:dark={$isDark}>
    <h1>Users</h1>

    <FormLayout title="Post User">
        <form on:submit={submitUser}>
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input
                    type="text"
                    id="title"
                    bind:value={firstName}
                    placeholder="Enter first name"
                    required
                />
            </div>

            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input
                    type="text"
                    id="title"
                    bind:value={lastName}
                    placeholder="Enter last name"
                    required
                />
            </div>

            <div class="form-group">
                <label for="emailAddress">Email Address</label>
                <input
                    type="text"
                    id="title"
                    bind:value={emailAddress}
                    placeholder="Enter email address"
                    required
                />
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input
                    type="text"
                    id="title"
                    bind:value={password}
                    placeholder="Enter password"
                    required
                />
            </div>

            <div class="form-group">
                <label for="organization">Organization</label>
                <input
                    type="text"
                    id="title"
                    bind:value={organization}
                    placeholder="Organization name"
                    required
                />
            </div>

            <div class="form-group">
                <label for="role">User Role</label>
                <select id="role" bind:value={role} required>
                    <option value="">Please select a role</option>
                    <option value="BASIC">Basic</option>
                    <option value="ADMIN">Admin</option>
                </select>
            </div>

            <div class="button-wrapper">
                <button type="submit" class="form-button">Submit</button>
            </div>
        </form>
    </FormLayout>

    {#if postError}
        <p class="error-message">⚠️ {postError}</p>
    {/if}

    {#if error}
        <p class="error-message">⚠️ {error}</p>
    {/if}

    {#if data}
        <p class="success-message">✅ User created successfully!</p>
    {/if}
</main>

<style>
    main {
        padding: 2rem;
        max-width: 60%;
        margin: 0 auto;
        text-align: center;
        background-color: white;
        color: black;
        transition:
            background-color 0.3s ease,
            color 0.3s ease;
    }

    .dark {
        background-color: #121212;
        color: #f0f0f0;
    }

    .dark form {
        background-color: #1e1e1e;
        border-radius: 10px;
        padding: 2em;
    }

    .form-group {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        text-align: left;
        margin-bottom: 15px;
    }

    .form-group label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
        color: #2b5876;
    }

    .dark .form-group label {
        color: #f0f0f0;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 90%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;
        background-color: white;
        color: black;
    }

    .dark .form-group input,
    .dark .form-group select,
    .dark .form-group textarea {
        background-color: #1f1f1f;
        color: #f0f0f0;
        border: 1px solid #444;
    }

    .dark h1 {
        color: white;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: #4caf50;
        box-shadow: 0 0 6px rgba(76, 175, 80, 0.5);
    }

    .form-group textarea {
        resize: none;
        height: 80px;
    }

    .button-wrapper {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .form-button {
        width: 30%;
        padding: 0.75rem;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
        transition: background-color 0.3s ease;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: bold;
    }

    input,
    select {
        width: 90%;
        padding: 0.8rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    textarea {
        resize: none;
    }

    #description {
        width: 87%;
    }

    #title {
        width: 87%;
    }

    button {
        padding: 1rem;
        background-color: #4caf50;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1rem;
        border-radius: 5px;
        width: 20%;
    }

    button:hover {
        background-color: #45a049;
    }

    .success-message {
        color: green;
        font-size: 1.1rem;
        font-weight: bold;
    }

    .error-message {
        color: red;
        font-size: 1rem;
        font-weight: bold;
    }

    @media (max-width: 1200px) {
        main {
            padding: 1.5rem;
            max-width: 500px;
        }

        input,
        textarea,
        button {
            font-size: 1.1rem;
        }

        button {
            padding: 0.9rem;
        }
    }

    @media (max-width: 768px) {
        main {
            padding: 1.2rem;
            max-width: 100%;
        }

        input,
        textarea,
        button {
            font-size: 1rem;
        }

        button {
            padding: 1rem;
        }
    }

    @media (max-width: 480px) {
        main {
            padding: 1rem;
            max-width: 100%;
        }

        input,
        textarea,
        button {
            font-size: 0.9rem;
        }

        button {
            padding: 0.9rem;
        }
    }
</style>
