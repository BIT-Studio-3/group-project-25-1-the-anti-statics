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
    </div>
  </div>
  
</main>
