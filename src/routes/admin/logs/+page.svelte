<script>
  import Admin from "../../../lib/Admin.svelte";
  import Log from "../../../lib/SVGs/scroll-solid.svg";
</script>

<main>
  <Admin />
  <section id="container">
    <header>
      <img src={Log} alt="log" height=20 />
      <h1>Website Logs</h1>
    </header>
  </section>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr 2.3fr;
  }
  #container {
    background-color: rgba(255, 255, 255, 0.5);
    overflow-x: hidden;
    height: 85vh;
  }
  header {
    background-color: white;
    padding: 1em;
    border-bottom: 1px solid rgb(182, 164, 164);
    display: flex;
    gap: 1em;
    align-items: center;
  }
</style>
