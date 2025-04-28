<script>
  import { postLogin } from "./utils/postLogins.js";
  let emailAddress = "";
  let password = "";
  //Login function props
  let postError = "";
  let error = "";
  let data = "";

  import logo from "../../lib/Images/dma.png";

  import user from "../../stores/user.js";
  import { login } from "../../stores/login.js";

  //console value of login
  console.log(`Login (Login page): ${$login}`);

  import { goto } from "$app/navigation";

  if ($login) {
    //Redirect user to main page
    goto("/");
  }

  const submitLogin = async (event) => {
    // Form data object
    const loginData = {
      emailAddress,
      password,
    };

    const result = await postLogin(loginData);

    data = result.data;
    error = result.error;
    postError = result.postError;

    console.log("Post data:", data);
    console.log("Error:", error);

    if (result.data) {
      // Update user store
      setTimeout(() => {
      user.set(data); // Set user after delay
    }, 2000);
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
        <div id="email">
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            bind:value={emailAddress}
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
      {#if error}
        <p class="message" id="error">{error}</p>
      {/if}
      {#if postError}
        <p class="message" id="postError">⚠️{postError}</p>
      {/if}
      {#if data}
        <p class="message" id="loggedIn">You have succesfully logged in!</p>
      {/if}
    </div>
  </main>
{/if}

<style>
  .message{
    margin-top: 0.4em;
    padding: 1em;
    text-align: center;
    font-weight: bold;
    border-radius: 6px;
    border: 3px dashed black;
  }
  #postError{
    background-color: rgb(237, 74, 74);
    color: white;
    text-shadow: 2px 2px 3px #333;
  }
  #error{
    background-color: rgb(142, 125, 125);
    color: white;
    text-shadow: 2px 2px 3px #333;
  }
  #loggedIn{
    background-color: rgb(7, 189, 28);
    color: white;
    text-shadow: 2px 2px 3px #333;
  }
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
