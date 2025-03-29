<script>
  import { postLogin } from "./utils/postLogins.js";
  let username = "";
  let password = "";
  let error = "";
  let data = "";
  
  import logo from "../../lib/Images/dma.png";

  import user from "../../stores/user.js";
  import { login } from "../../stores/login.js"

  $: {
    $user === null ? login.set(false) : login.set(true);
  }

  import { goto } from "$app/navigation";

  if ($login){ //Redirect user to main page
    goto("/");
  }

  import { page } from "$app/stores";
  $: isLoginPage = $page.url.pathname === "/login"; // Check if the current page is the login page

  const submitLogin = async (event) => {
    // Form data object
    const loginData = {
      username,
      password,
    };

    const result = await postLogin(loginData);

    data = result.data;
    error = result.error;

    console.log("Post data:", data);
    console.log("Error:", error);

    if (result.data) {
      alert("Login posted successfully!");
    }
  };

  

</script>

{#if !$login}
  <main>
    <div id="form-container">
      <div id="image-container">
        <img src={logo} alt="logo" width="200" height="110" />
      </div>
      <div id="login-header">
        <h1>Sign in</h1>
      </div>
      <form on:submit|preventDefault={submitLogin}>
        <div id="username">
          <input
            type="text"
            id="username"
            placeholder="Username"
            bind:value={username}
          />
        </div>
        <div id="password">
          <input
            type="password"
            id="password"
            placeholder="Password"
            bind:value={password}
          />
        </div>
        <div id="submit">
          <button type="submit">Sign in</button>
        </div>
      </form>
    </div>
  </main>

  {#if error}
    <p style="color: red;">{error}</p>
  {/if}

  {#if data}
    <p style="color: green;">You have succesfully logged in!</p>
  {/if}
{/if}

<style>
  main {
    display: grid;
    place-items: center;
    height: 40em;
  }
  #form-container {
    padding: 1em;
    background-color: white;
    border: 2px dashed rgb(125, 216, 160);
    border-radius: 3%;
    width: 20em;
    box-shadow: 10px 10px 10px rgb(182, 173, 173);
  }
  #form-container div {
    display: flex;
    flex-direction: column;
    padding: 0.5em;
    background-color: white;
  }
  #login-header {
    text-align: center;
  }
  form {
    background-color: white;
  }
  #form-container div * {
    background-color: white;
  }
  input,
  button {
    padding: 0.3em;
    box-shadow: 3px 3px 3px #333;
  }
  #image-container {
    align-items: center;
  }
  #submit button {
    background-color: #b5d5c5;
    height: 3em;
    font-weight: bold;
    border: none;
    transition:
      background-color 0.3s ease,
      transform 0.2s ease;
  }

  #submit button:hover {
    background-color: #048d2d; /* Darker green on hover */
    transform: scale(1.05); /* Slightly enlarges the button */
    cursor: pointer;
    color: white;
  }
</style>
