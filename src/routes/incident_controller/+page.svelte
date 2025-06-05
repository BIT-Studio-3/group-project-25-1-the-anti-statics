<script>
  import Dashboard from "../../lib/SVGs/gauge-solid.svg";
  import Fire from "/src/lib/SVGs/fire-solid.svg";
  import Teams from "/src/lib/SVGs/users-solid.svg";
  import Personnel from "/src/lib/SVGs/user-plus-solid.svg";
  import Resources from "/src/lib/SVGs/boxes-stacked-solid.svg";

  import IncidentControl from "/src/lib/IncidentControl.svelte";

  export let data;
  const {
    activeDisasters,
    teams,
    disasters,
    floods,
    fires,
    earthquakes,
    cyclones,
    tsunamis,
    landslides,
    volcanics,
    others,
    resources,
  } = data;

  const total = disasters.length || 1

  const incidentTypes = [
  { label: "Floods", value: (floods.length / total) * 100 },
  { label: "Fires", value: (fires.length / total) * 100 },
  { label: "Earthquakes", value: (earthquakes.length / total) * 100 },
  { label: "Cyclones", value: (cyclones.length / total) * 100 },
  { label: "Tsunamis", value: (tsunamis.length / total) * 100 },
  { label: "Landslides", value: (landslides.length / total) * 100 },
  { label: "Volcanic", value: (volcanics.length / total) * 100 },
  { label: "Other", value: (others.length / total) * 100 },
]
</script>

<main>
  <IncidentControl />
  <section id="container">
    <header>
      <img src={Dashboard} alt="gauge" height="20" />
      <h1>Incident Dashboard</h1>
    </header>
    <section id="card-container">
      <section class="tabs" id="incidents">
        <section class="info">
          <h4>Active Incidents</h4>
          <p>{activeDisasters.length}</p>
        </section>
        <section class="icon" id="icon1">
          <img src={Fire} alt="fire" height="40" />
        </section>
      </section>

      <section class="tabs" id="teams">
        <section class="info">
          <h4>Response Teams</h4>
          <p>{teams.length}</p>
        </section>
        <section class="icon" id="icon2">
          <img src={Teams} alt="teams" height="40" />
        </section>
      </section>

      <section class="tabs" id="resources">
        <section class="info">
          <h4>Resources Deployed</h4>
          <p>{resources.length}</p>
        </section>
        <section class="icon" id="icon3">
          <img src={Resources} alt="resources" height="40" />
        </section>
      </section>

      <section class="tabs" id="personnel">
        <section class="info">
          <h4>Personnel Active</h4>
          <p>12</p>
        </section>
        <section class="icon" id="icon4">
          <img src={Personnel} alt="personnel" height="40" />
        </section>
      </section>
    </section>

    <section id="stats">
      <section id="trends">
        <header>
          <h3>Incident Trends</h3>
          <select>
            <option>Last 2 days</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </header>
        <section></section>
      </section>
      <section id="types">
        <header>
          <h3>Incident Types</h3>
        </header>
        <section id="bars">
          {#each incidentTypes as type}
            <div>
              <p>{type.label}</p>
              <p>{type.value}%</p>
            </div>
            <meter
              id="floods"
              min="0"
              max="100"
              value={type.value}
              low="25"
              high="75"
            ></meter>
          {/each}
        </section>
      </section>
    </section>
  </section>
</main>

<style>
  #bars div {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }
  meter {
    width: 100%;
  }
  #types header {
    display: flex;
    align-items: center;
  }
  #trends section {
    background-color: rgb(173, 143, 143);
  }
  #trends select {
    padding: 0.4em;
    border-radius: 7px;
    border: 1px solid grey;
  }
  #trends header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #stats {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  #trends,
  #types {
    background-color: white;
    border-radius: 7px;
    box-shadow: -1px 1px 8px #333;
    margin-inline: 0.7em;
    gap: 1em;
    display: grid;
    height: 28em;
    grid-template-rows: 1fr 6fr;
  }
  #icon4 {
    background-color: rgb(225, 222, 34);
  }
  #icon3 {
    background-color: rgb(61, 213, 122);
  }
  #icon2 {
    background-color: rgb(128, 107, 236);
  }
  #icon1 {
    background-color: rgb(221, 116, 116);
  }
  .icon {
    border-radius: 100px;
    display: flex;
    align-items: center;
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
    height: 85vh;
  }
  #container section {
    padding: 1em;
  }
  header {
    background-color: white;
    padding: 1em;
    border-bottom: 1px solid rgb(182, 164, 164);
    display: flex;
    gap: 1em;
    align-items: center;
  }
  main {
    display: grid;
    grid-template-columns: 1fr 2.3fr;
    height: 100%;
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
  @media (width<=1015px) {
    #stats {
      grid-auto-flow: row;
      grid-template-columns: repeat(1, 1fr);
      gap: 1em;
    }
  }
</style>