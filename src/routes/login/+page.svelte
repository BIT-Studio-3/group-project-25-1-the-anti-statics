<script>
  import { postLogin } from "./utils/postLogins.js";
  import logo from "../../lib/Images/dma.png";
  import user from "../../stores/user.js";
  import { login } from "../../stores/login.js";
  import { goto } from "$app/navigation";

  let emailAddress = "";
  let password = "";
  let postError = "";
  let error = "";
  let data = "";

  const LOGIN_DELAY = 2000;

  $: $user ? login.set(true) : login.set(false);
  $: if ($login) goto("/");

  const submitLogin = async (event) => {
  const loginData = { emailAddress, password };
  const result = await postLogin(loginData);

  data = result.data;
    error = result.error;
    postError = result.postError;

    if (data) {
      setTimeout(() => {
        user.set(data);
      }, LOGIN_DELAY);
    }
  };
</script>

{#if !$login}
<main class="login-page">
  <!--Left side-->
  <div class="login-left">
    <div class="overlay">
      <h1>Welcome Back</h1>
      <p>...text...</p>
      <div class="social-icons">
        <i>🐦</i> <i>📘</i> <i>📷</i>
      </div>
    </div>
  </div>

  <!--Right Side-->
  <div class="login-right">
    <div id="form-container">
      <div id="image-container">
        <img src={logo} alt="logo" width="120" height="70" />
      </div>
      <h2>Sign in</h2>
      <form on:submit|preventDefault={submitLogin}>
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          bind:value={emailAddress}
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          bind:value={password}
        />

        <button type="submit">Sign in now</button>
      </form> 

        {#if error}
        <p class="message error">{error}</p>
      {/if}
      {#if postError}
        <p class="message postError">⚠️ {postError}</p>
      {/if}
      {#if data}
        <p class="message success">You have successfully logged in!</p>
      {/if}
    
      <p class="terms">
        By clicking on "Sign in now" you agree to our
        <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
      </p>
    </div>
  </div> 
</main>
{/if}

<style>
  main{
    background-image: url('/jpg.jpg');
    background-size: cover;
    background-position: center;
  }
  main.login-page {
    display: flex;
    height: 100vh;
    font-family: Arial, sans-serif;
  }

  .login-left {
    flex: 1;
    position: relative;
  }

  .overlay {
    height: 100%;
    width: 100%;
    padding: 3em;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .overlay h1 {
    font-size: 3em;
    margin-bottom: 0.5em;
  }

  .overlay p {
    font-size: 1.1em;
    margin-bottom: 1.5em;
    line-height: 1.4em;
  }

  .social-icons i {
    font-size: 1.5em;
    margin-right: 1em;
  }

  .login-right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #form-container {
    width: 100%;
    max-width: 350px;
    padding: 2em;
    background-color: transparent;
    border-radius: 0.5em;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  #image-container {
    text-align: center;
    margin-bottom: 1em;
  }

  #form-container h2 {
    text-align: center;
    margin-bottom: 1.2em;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input[type="email"],
  input[type="password"] {
    padding: 0.75em;
    margin-bottom: 1em;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 1em;
    transition: border 0.3s ease;
  }

  input:focus {
    border: 1px solid #3cb371;
    outline: none;
  }

  button {
    padding: 0.75em;
    background-color: #3cb371;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #2e8b57;
  }

  .message {
    margin-top: 1em;
    padding: 0.8em;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
  }

  .message.error {
    background: rgb(142, 125, 125);
    color: white;
  }

  .message.postError {
    background: rgb(237, 74, 74);
    color: white;
  }

  .message.success {
    background: rgb(7, 189, 28);
    color: white;
  }

  .terms {
    margin-top: 1em;
    font-size: 0.75em;
    text-align: center;
    color: #666;
  }

  .terms a {
    color: #000;
    text-decoration: underline;
  }
</style>

