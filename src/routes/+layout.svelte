<script>
  import "../app.css";
  import Header from "../lib/Header.svelte";
  import Footer from "../lib/Footer.svelte";

  import user from "../stores/user.js";
  import { login } from "../stores/login.js";

  let loading = true; // Add a loading state

  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  //Set the login state
  $: {
    $user === null ? login.set(false) : login.set(true);
  }

  $: isLoginPage = $page.url.pathname === "/login"; // Check if the current page is the login page

  onMount(() => {
    const unsubscribe = login.subscribe((value) => {
      if (!value && !isLoginPage) {
        goto("/login");
      }
    });
    loading = false;

    return () => unsubscribe(); // Cleanup subscription
  });

  //console value of login
  console.log(`Login (Website): ${$login}`);
</script>

{#if loading}
  <div id="loading">
    <p>LOADING... ↻</p>
  </div>
{:else if $login}
  <Header />
  <slot />
  <Footer />
{:else if isLoginPage}
  <slot /> <!-- Content for the login page will be shown here -->
{/if}

<style>
  #loading {
    height: 10em;
    display: grid;
    place-items: center;
  }
  #loading p {
    background-color: black;
    color: white;
    padding: 1em;
    border-radius: 5%;
    font-weight: bolder;
  }
</style>
