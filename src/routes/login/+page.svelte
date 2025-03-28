<script>
  import { postLogin } from "./utils/postLogins.js";
  let username = "";
  let password = "";
  let error = "";
  let data = "";

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

  import user from "../../stores/user.js";
  $: login = $user === null ? false : true;

  import logo from "../../lib/Images/dma.png";
</script>

{#if !login}
  <main>
    <div id="form-container">
      <div id="image-container">
        <img src={logo} alt="logo" width=200 height=110>
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
    height: 30em;
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
  #submit button {
    background-color: #b5d5c5;
  }
  input,
  button {
    padding: 0.3em;
    box-shadow: 3px 3px 3px #333;
  }
  #image-container{
    align-items: center;
  }
</style>
