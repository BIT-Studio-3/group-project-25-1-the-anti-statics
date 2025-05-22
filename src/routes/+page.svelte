<script>
  import { selectedAgency } from "$lib/stores.js";

  import Map from "../lib/Map.svelte";

  //Export the load function
  export let data;
  const { alerts, error, message } = data;

  import { format } from "date-fns";
   import { isDark } from "../stores/theme.js";
</script>

<div class="PageContentContainer" class:dark={$isDark}>
  {#if error}
    <div>{error}</div>
  {:else}
    <div class="AlertsCard">
      <h3>Recent Alerts</h3>
      {#if !data.alerts || data.alerts.length === 0}
        <ul class="no-alerts-message">
          <li>{message}</li>
        </ul>
      {:else}
        {#each alerts as alert}
          <ul class="AlertsList">
            <li>Emergency: {alert.title}</li>
            <li>{alert.emergencyType}</li>
            <li>{alert.alertLevel}</li>
            <li>{alert.region}</li>
            <li>{alert.description}</li>

            <li>
              Alerted posted at: {format(
                new Date(alert.createdAt),
                "MM/dd/yyyy hh:mm a"
              )}
            </li>
            <li>
              Updated at: {format(
                new Date(alert.updatedAt),
                "MM/dd/yyyy hh:mm a"
              )}
            </li>
          </ul>
        {/each}
      {/if}
    </div>
  {/if}

  <figure class="pinmap">
    <h3>Active Disasters</h3>
    <Map />
  </figure>

  <div id="response">
    <h3>Response Guidelines</h3>
    <ul>
      <li>No Response Guidelines</li>
    </ul>
  </div>
</div>

<style>
  h3 {
    margin-top: 0.5em;
    font-size: 180%;
    text-align: center;
  }

  .PageContentContainer {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 2em;
    place-items: center;
  }

  .AlertsCard,
  #response {
    display: flex;
    flex-direction: column;
    border: 5px black solid;
    border-radius: 15px;
    width: 25%;
    color: #333;
    background-color: white;
    height: 55em;
    overflow-y: auto;
    padding: 1em;
  }

  .AlertsCard h3,
  #response h3{
    background-color: inherit;
  }

  .AlertsList,
  #response ul {
    padding: 1em;
    margin-bottom: 1em;
    list-style: none;
    border-radius: 8px;
  }

  .AlertsList {
    border: 3px #ec6969 solid;
  }
  #response ul {
    border: 3px #7269ec solid;
  }

  .AlertsList li {
    list-style: none;
    background-color: inherit;
  }

  .pinmap {
    height: 57em;
    width: 50%;
    border: solid;
    text-align: center;
    background-color: #b7daf8;
    overflow-y: auto;
  }

  .pinmap h3 {
    background-color: #b7daf8;
  }

.no-alerts-message li {
  color: #555;
}

.dark .no-alerts-message li {
  color: #cccccc;
}

.dark #response ul li {
  color: #dddddd;
}

  .dark .AlertsCard,
  .dark #response {
    background-color: #1f1f1f;
    color: #f0f0f0;
    border-color: #555;
  }

  .dark .AlertsList {
    border-color: #cc5c5c;
  }

  .dark #response ul {
    border-color: #5c5ccc;
  }

  .dark .AlertsList li {
    background-color: inherit;
    color: #ddd;
  }

  .dark .pinmap {
    background-color: #2e2e2e;
    border-color: #555;
  }

  .dark .pinmap h3 {
    background-color: #2e2e2e;
    color: #f0f0f0;
  }

  .dark h3 {
    color: #f0f0f0;
  }

  @media (max-width: 1200px) {
    /* For tablets and smaller desktops */
    .PageContentContainer {
      flex-direction: column; /* Stack the items vertically */
      flex-wrap: wrap;
      gap: 10px;
      place-items: center;
      margin: 0;
    }

    .AlertsCard,
    #response {
      width: 100%; /* Make both alerts and response cards take full width */
      box-sizing: border-box;
      height: 40em; /* Adjust the height to fit content */
      margin-bottom: 10px; /* Add spacing between the cards */
      overflow-y: auto;
    }

    .pinmap {
      width: 100%; /* Make map take full width on smaller screens */
      height: 30%; /* Adjust map height for better fit on mobile */
      max-width: 100%; /* Ensure map doesn't exceed container size */
      box-sizing: border-box;
    }
  }
</style>
