<script>
    import '../app.css';
    import Header from '../lib/Header.svelte';
    import Footer from '../lib/Footer.svelte';

    let login = true;
    // Watch for route changes
</script>

{#if login}
  <Header />
  <slot />
  <Footer />
{:else}
  <h1>Please login</h1>
{/if}
