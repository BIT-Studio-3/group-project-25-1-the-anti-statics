<script>
  import Admin from "../../lib/Admin.svelte";
  import Fire from "../../lib/SVGs/fire-solid.svg";
  import Teams from "../../lib/SVGs/users-solid.svg"
  import Resources from "../../lib/SVGs/boxes-stacked-solid.svg"
  import Personnel from "../../lib/SVGs/user-plus-solid.svg"
</script>

<main>
  <Admin />
  <section id="container">
    <h1>Dashboard</h1>
    <section>
      <h2>Disaster Response Overview</h2>
      <h3>Here is an overview of what's happening across New Zealand</h3>
    </section>

    <section id="card-container">
      <section class="tabs" id="incidents">
        <section class="info">
          <h4>Active Incidents</h4>
          <p>12</p>
        </section>
        <section class="icon" id="incidents">
          <img src={Fire} alt="fire" height="40" />
        </section>
      </section>

      <section class="tabs" id="teams">
        <section class="info">
          <h4>Response Teams</h4>
          <p>23</p>
        </section>
        <section class="icon" id="teams">
            <img src={Teams} alt="teams" height="40" />
        </section>
      </section>

      <section class="tabs" id="resources">
        <section class="info">
          <h4>Resources Deployed</h4>
          <p>12</p>
        </section>
        <section class="icon">
            <img src={Resources} alt="resources" height="40" />
        </section>
      </section>

      <section class="tabs" id="personnel">
        <section class="info">
          <h4>Personnel Active</h4>
          <p>12</p>
        </section>
        <section class="icon">
            <img src={Personnel} alt="personnel" height="40" />
        </section>
      </section>

    </section>
  </section>
</main>

<style>
  .icon {
    border-radius: 100px;
    display: flex;
    align-items: center;
    background-color: red;
    justify-content: center;
    width: 50px;
    justify-self: flex-end;
  }
  #personnel {
    border-left: 4px solid goldenrod;
  }
  #resources {
    border-left: 4px solid green;
  }
  #card-container {
    display: grid;
    grid-template-columns: repeat(
      4,
      1fr
    ); /* 4 cards per row on large screens */
  }
  #incidents {
    border-left: 4px solid red;
  }
  #teams {
    border-left: 4px solid blue;
  }
  .tabs p:first-of-type {
    font-weight: bolder;
    font-size: xx-large;
  }
  .tabs {
    background-color: white;
    border-radius: 7px;
    box-shadow: -1px 1px 8px #333;
    margin-inline: 0.7em;
    gap: 1em;
    display: grid;
    grid-auto-flow: column;
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
  @media (width<=1600px) {
    #card-container {
      grid-template-columns: repeat(
        2,
        1fr
      ); /* 4 cards per row on large screens */
      gap: 1em;
    }
  }
  @media (width<=885px) {
    #card-container {
      grid-template-columns: repeat(
        1,
        1fr
      ); /* 1 card per row on large screens */
      gap: 1em;
    }
  }
</style>
