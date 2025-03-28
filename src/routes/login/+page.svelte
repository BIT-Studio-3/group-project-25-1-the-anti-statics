<script>
  import { postLogin } from "./utils/postLogins.js";
  let username = "";
  let password = "";
  let error = "";

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

<style>
</style>
