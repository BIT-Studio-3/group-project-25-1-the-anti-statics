<script>
  import { postLogin } from "./utils/postLogins.js";
  import logo from "../../lib/Images/logo_white.png";
  import user from "../../stores/user.js";
  import { login } from "../../stores/login.js";
  import { goto } from "$app/navigation";

  let emailAddress = "";
  let password = "";
  let postError = "";
  let error = "";
  let data = "";

  const LOGIN_DELAY = 2000;

  //console value of login
  console.log(`Login (Login page): ${$login}`);

  if ($login) {
    //Redirect user to main page
    goto("/");
  }

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
      <img src={logo} alt="logo" height="400" />
      <p>Copyright © 2025 Otago Polytechnic</p>
      <p>Made by the Studio 3 team 'The Anti Statics'</p>
      <div class="social-icons">
        <!--can put the social media icons here as shown in the demo-->
      </div>
    </div>
  </div>

  <!--Right Side-->
  <div class="login-right">
    <div id="form-container">
      <div id="image-container">
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
  main.login-page {
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    width: 100%;
    font-family: Arial, sans-serif;
    background-image: url('/jpg.jpg');
    background-size: cover;
    background-position: center;
  }

  .login-left, .login-right {
    flex: 1;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: white;
  }

  .overlay {
    text-align: center;
    padding: 2em;
    max-width: 400px;
  }

  .overlay p {
    font-size: 1.1em;
    margin-bottom: 1.5em;
    line-height: 1.4em;
  }

  #image-container,
  p,
  a {
    background-color: transparent;
    color: white;
  }

  #form-container {
    max-width: 350px;
    width: 100%;
    padding: 2em;
    border-radius: 0.5em;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  h2 {
    text-align: center;
    margin-bottom: 1.2em;
    color: white;
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
    border: 1px solid white;
    font-size: 1.2em;
    background-color: transparent;
    color: white;
  }

  input::placeholder {
    color: white;
    opacity: 1;
  }

  input:focus {
    border-color: #3cb371;
    outline: none;
  }

  button {
    padding: 0.75em;
    background-color: #3cb371;
    color: white !important;
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

  .message.error { background: #8e7d7d; }
  .message.postError { background: #ed4a4a; }
  .message.success { background: #07bd1c; }

  .terms {
    margin-top: 1em;
    font-size: 0.75em;
    text-align: center;
  }

  .terms a {
    color: white;
    text-decoration: underline;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    main.login-page {
      flex-direction: column;
      background-image: url('/jpg768px.jpg');
    }

    .login-left, .login-right {
      width: 100%;
      height: 50vh;
    }

    #form-container {
      max-width: 90%;
      padding: 1.5em;
    }

    .overlay p { font-size: 1em; }
  }

  @media (max-width: 480px) {
    main.login-page {
      background-image: url('/jpg480.jpeg');
    }

    #form-container {
      padding: 1.2em;
    }

    .overlay p { font-size: 0.9em; }
  }
</style>
