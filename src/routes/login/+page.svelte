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
        <a href="/terms">Terms of Service</a> | <a href="#">Privacy Policy</a>
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
    display: flex;
    height: 100vh;
    display: flex;
    font-family: Arial, sans-serif;
  }
  main.login-page {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .login-left {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: transparent;
    height: 100vh;
  }

  .overlay {
    text-align: center;
    padding: 2em;
    max-width: 400px;
    background-color: transparent;
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
    background-color: transparent;
  }

  .login-right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    height: 100vh;
    color: white;
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
    background-color: transparent;
  }

  #form-container h2 {
    text-align: center;
    margin-bottom: 1.2em;
    background-color: transparent;
    color: white;
  }

  form {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    color: white;
  }

  input[type="email"],
  input[type="password"] {
    padding: 0.75em;
    margin-bottom: 1em;
    border-radius: 4px;
    border: 1px solid white;
    font-size: 1.2em;
    transition: border 0.3s ease;
    background-color: transparent;
  }

  input::placeholder {
  color: white;
  opacity: 1;
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
    color: white;
  }

  .terms a {
    color: white;
    text-decoration: underline;
    font-weight: bold;
  }

  h1,p,a{
    background-color: transparent;
    color: white;
  }

  @media (max-width: 768px) {
  main {
    background-image: url('/jpg768px.jpg');
    min-height: 100vh;
  }

  main.login-page {
    flex-direction: column;
    min-height: 100vh;
  }

  .login-left {
    position: relative;
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: transparent;
  }

  .login-right {
    position: relative; 
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }

  #form-container {
    max-width: 90%;
    padding: 1.5em;
  }

  .overlay h1 {
    font-size: 2.5em;
  }

  .overlay p {
    font-size: 1em;
  }
}

@media (max-width: 480px) {
  main {
    background-image: url('/jpg480.jpeg');
    min-height: 100vh;
  }

  main.login-page {
    flex-direction: column; 
    min-height: 100vh;
  }

  .login-left {
    position: relative; 
    width: 100%;
    height: 50vh; 
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: transparent; 
  }

  .login-right {
    position: relative; 
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }

  #form-container {
    max-width: 90%;
    padding: 1.2em;
  }

  .overlay h1 {
    font-size: 2em;
  }

  .overlay p {
    font-size: 0.9em;
  }
}
</style>

