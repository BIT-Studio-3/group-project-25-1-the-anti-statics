<script>
  import Admin from "../../lib/Admin.svelte";
</script>

<main>
  <Admin />
  <section id="container">
    <h1>Dashboard</h1>
    <section>
      <h2>Disaster Response Overview</h2>
      <h3>Here is an overview of what's happening across New Zealand</h3>
    </section>

    <section class="tabs" id="incidents">
        <h4>Active Incidents</h4>
        <p>12</p>
    </section>

  </section>
</main>

<style>
  #incidents{
    border-left: 4px solid red;
  }
  .tabs p:first-of-type{
    font-weight: bolder;
    font-size: xx-large;
  }
  .tabs{
    background-color: white;
    border-radius: 7px;
    box-shadow: -1px 1px 8px #333;
    margin-inline: 0.7em;
    display: flex;
    flex-direction: column;
  }
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
