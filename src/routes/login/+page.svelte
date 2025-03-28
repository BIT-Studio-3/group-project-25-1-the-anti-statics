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
</script>

{#if !login}
  <h1>Login</h1>
  <form on:submit|preventDefault={submitLogin}>
    <div>
      <label for="username">Username</label>
      <input type="text" id="username" bind:value={username} />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" id="password" bind:value={password} />
    </div>
    <button type="submit">Submit</button>
  </form>

  {#if error}
    <p style="color: red;">{error}</p>
  {/if}

  {#if data}
    <p style="color: green;">You have succesfully logged in!</p>
  {/if}
{/if}

<style>
</style>
