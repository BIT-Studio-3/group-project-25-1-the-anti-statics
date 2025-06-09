<script>
  import Admin from "../../lib/Admin.svelte";
  import Fire from "../../lib/SVGs/fire-solid.svg";
  import Teams from "../../lib/SVGs/users-solid.svg";
  import Resources from "../../lib/SVGs/boxes-stacked-solid.svg";
  import Personnel from "../../lib/SVGs/user-plus-solid.svg";
  import Dashboard from "../../lib/SVGs/gauge-solid.svg";
  import { isDark } from "../../stores/theme.js";

  const incidentTypes = [
    { label: "Floods", value: 42 },
    { label: "Fires", value: 25 },
    { label: "Earthquakes", value: 15 },
    { label: "Storms", value: 18 },
  ];
</script>

<main class:dark={$isDark}>
  <Admin />
  <section id="container">
    <header>
        <img src={Dashboard} alt="gauge" height=20>
        <h1>Dashboard</h1>
    </header>
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
        <section class="icon" id="icon1">
          <img src={Fire} alt="fire" height="40" />
        </section>
      </section>

      <section class="tabs" id="teams">
        <section class="info">
          <h4>Response Teams</h4>
          <p>23</p>
        </section>
        <section class="icon" id="icon2">
          <img src={Teams} alt="teams" height="40" />
        </section>
      </section>

      <section class="tabs" id="resources">
        <section class="info">
          <h4>Resources Deployed</h4>
          <p>12</p>
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
main {
  display: grid;
  grid-template-columns: 1fr 2.3fr;
  height: 100%;
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

#card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

.tabs p:first-of-type {
  font-weight: bolder;
  font-size: xx-large;
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
  height: 20em;
  grid-template-rows: 1fr 6fr;
}

#trends header,
#types header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#trends section {
  background-color: rgb(173, 143, 143);
}

#trends select {
  padding: 0.4em;
  border-radius: 7px;
  border: 1px solid grey;
}

#bars div {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}

meter {
  width: 100%;
}

.icon {
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  justify-self: flex-end;
}

#icon1 { background-color: rgb(221, 116, 116); }
#icon2 { background-color: rgb(128, 107, 236); }
#icon3 { background-color: rgb(61, 213, 122); }
#icon4 { background-color: rgb(225, 222, 34); }

#incidents { border-left: 4px solid red; }
#teams     { border-left: 4px solid blue; }
#resources { border-left: 4px solid green; }
#personnel { border-left: 4px solid goldenrod; }

.dark {
  background-color: transparent;
  color: white;
}

.dark #container {
  background-color: #00000027;
}

.dark header {
  background-color: #1c1c1c;
  border-bottom: 1px solid #333;
}

.dark .tabs,
.dark #trends,
.dark #types {
  background-color: #222;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
}

.dark #trends section {
  background-color: #333;
}

.dark #trends select {
  background-color: #2e2e2e;
  color: #ffffff;
  border: 1px solid #555;
}

.dark #bars div p,
.dark p,
.dark h1,
.dark h2,
.dark h3,
.dark h4,
.dark div,
.dark select,
.dark option {
  color: #ffffff !important;
}

.dark meter {
  background: #444;
}

.dark #types meter::-webkit-meter-bar {
  background: #444;
}

.dark #types meter::-webkit-meter-optimum-value {
  background: #4caf50;
}

@media (max-width: 1600px) {
  #card-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
  }
}

@media (max-width: 1015px) {
  #stats {
    grid-auto-flow: row;
    grid-template-columns: repeat(1, 1fr);
    gap: 1em;
  }
}

@media (max-width: 885px) {
  #card-container {
    grid-template-columns: repeat(1, 1fr);
    gap: 1em;
  }
}
</style>
