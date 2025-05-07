<script>
  import Admin from "../../lib/Admin.svelte";
</script>

<main>
  <Admin />
  <section id="container">
    <h1>Dashboard</h1>
    <section>
      <h2>User Accounts</h2>
      <h3>Manage all system users and their</h3>
    </section>

    <p>Active Users</p>
    <p>Total Disasters</p>
    <p>Active Disasters</p>
    <p>Total Hazards</p>
    <p>Total Damages</p>
    <p>Filter hazards and damages by incident</p>
  </section>
</main>

<style>
  #container {
    background-color: rgba(255, 255, 255, 0.5);
    overflow-x: hidden;
  }
  #container section {
    padding: 1em;
  }
  h1 {
    background-color: white;
    padding: 1em;
    border-bottom: 1px solid rgb(182, 164, 164);
  }
  main {
    display: grid;
    grid-template-columns: 1fr 2.3fr;
  }
</style>
