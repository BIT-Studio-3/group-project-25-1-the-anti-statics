<script>
  import "../app.css";
  import Header from "../lib/Header.svelte";
  import Footer from "../lib/Footer.svelte";
  import Loading from "../lib/GIFs/loading.gif";

  import user from "../stores/user.js";
  import { login } from "../stores/login.js";
  import { isDark } from "../stores/theme.js";

  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  let loading = true;

  const publicPages = ["/login", "/terms", "/privacy"];
  $: currentPath = $page.url.pathname;
  $: isPublicPage = publicPages.includes(currentPath);

  onMount(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      isDark.set(true);
    }

    if (!$login && !isPublicPage) {
      goto("/login");
    }

    loading = false;
  });

  console.log(`Login (Website): ${$login}`);
</script>

{#if loading}
  <div id="loading">
    <img src={Loading} alt="Loading" height="100" />
  </div>
{:else if $login}
  <Header />
  <main class:dark={$isDark}> 
    <slot />
  </main>
  <Footer />
{:else if isPublicPage}
  <slot />
{/if}

<style>
  main {
    background-image: url(/src/lib/Images/background.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    bottom: 0%;
  }

  main.dark {
    background-color: #121212;
    background-image: url(/src/lib/Images/background_dark.jpg);
  }

  #loading {
    height: 90vh;
    display: grid;
    place-items: center;
  }
</style>
