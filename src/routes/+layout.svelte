<script>
  import "../app.css";
  import Header from "../lib/Header.svelte";
  import Footer from "../lib/Footer.svelte";

  import user from "../stores/user.js";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  let login = false;
  let isLoginPage = false;
  let loading = true; // Add a loading state

  //Set the login state
  $: login = $user === null ? false : true;
  $: isLoginPage = $page.url.pathname === "/login";

  onMount(() => {
    !login && !isLoginPage ? goto("/login") : loading = false;

    login ? goto("/") : loading = false;
  });
</script>

{#if loading}
  <div id="loading">
    <p>LOADING... ↻</p>
  </div>
{:else if login}
  <Header />
  <slot />
  <Footer />
{:else if isLoginPage}
  <slot/> <!-- Content for the login page will be shown here -->
{:else}
  <!-- Nothing is shown if the user is not logged in and we're not on the login page -->
{/if}

<style>
  #loading{
    height: 10em;
    display: grid;
    place-items: center;
  }
  #loading p{
    background-color: black;
    color: white;
    padding: 1em;
    border-radius: 5%;
    font-weight: bolder;
  }
</style>
