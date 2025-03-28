<script>
    import { page } from "$app/stores";
    import '../app.css';
    import Header from '../lib/Header.svelte';
    import Footer from '../lib/Footer.svelte';

    let login = false;

  // Watch for route changes
  $: {
    login = $page.url.pathname.startsWith("/login");
  }
</script>

{#if !login}
  <Header />
{/if}

<slot />

{#if !login}
  <Footer />
{/if}
