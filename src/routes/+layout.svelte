<script>
  import "../app.css";
  import Header from "../lib/Header.svelte";
  import Footer from "../lib/Footer.svelte";
  import Loading from "../lib/GIFs/loading.gif"

  import user from "../stores/user.js";
  import { login } from "../stores/login.js";

  let loading = true; // Add a loading state

  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  //Set the login state
  
  $: isLoginPage = $page.url.pathname === "/login"; // Check if the current page is the login page

  onMount(() => {
    if (!$login && !isLoginPage) {
      goto("/login");
    }
    loading = false;
  });

  //console value of login
  console.log(`Login (Website): ${$login}`);
</script>

{#if loading}
  <div id="loading">
    <img src={Loading} alt="Loading" height="100">
  </div>
{:else if $login}
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
{:else if isLoginPage}
  <slot /> <!-- Content for the login page will be shown here -->
{/if}

<style>
  main {
    background-image: url(../src/lib/Images/background.png);
    background-size: cover; /* or 'contain' depending on your needs */
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
  }
  #loading {
    height: 10em;
    display: grid;
    place-items: center;
    height: 90vh;
  }
</style>
