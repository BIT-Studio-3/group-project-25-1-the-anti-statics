<script>
  import "../app.css";
  import Header from "../lib/Header.svelte";
  import Footer from "../lib/Footer.svelte";

  import user from "../stores/user.js";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  $: login = $user === null ? false : true;

  onMount(() => {
    !login ? goto("/login") : goto("/");
  });
</script>

{#if !login}
  <slot/>
{:else}
  <Header />
  <slot />
  <Footer />
{/if}
