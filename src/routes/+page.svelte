<script>
  import { selectedAgency } from "$lib/stores.js";

  import Map from "../lib/Map.svelte";

  //Export the load function
  export let data;
  const { alerts, error, message } = data;

  import { format } from "date-fns";
</script>

<div class="PageContentContainer">
  {#if error}
    <div>{error}</div>
  {:else if message}
    <p>{message}</p>
  {:else}
    <div class="AlertsCard">
      <h3>Recent Alerts</h3>
      {#if alerts.length === 0}
        <ul></ul>
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
    background-color: red;
    gap: 20px;
  }

  .AlertsCard,
  #response {
    display: flex;
    flex-direction: column;
    border: solid;
    width: 25%;
    color: #333;
    background-color: white;
    height: 55em;
    overflow-y: auto;
  }

  .AlertsList,
  #response ul {
    padding: 1em;
    margin-bottom: 1em;
    list-style: none;
    border: 3px #ec6969 solid;
    border-radius: 8px;
  }
  .AlertsList li {
    list-style: none;
    background-color: inherit;
  }

  .pinmap {
    height: 55em;
    width: 50%;
    border: solid;
    text-align: center;
    background-color: #b7daf8;
    overflow-y: auto;
  }

  .pinmap h3 {
    background-color: #b7daf8;
  }

  @media (max-width: 1200px) {
    /* For tablets and smaller desktops */
    .PageContentContainer {
      flex-direction: column; /* Stack the items vertically */
      flex-wrap: wrap;
      gap: 10px;
    }

    .AlertsCard, #response {
      width: 100%; /* Make both alerts and response cards take full width */
      height: auto; /* Adjust the height to fit content */
      margin-bottom: 10px; /* Add spacing between the cards */
    }

    .pinmap {
      width: 100%; /* Make map take full width on smaller screens */
      height: 30%; /* Adjust map height for better fit on mobile */
      max-width: 100%; /* Ensure map doesn't exceed container size */
    }
  }

  
</style>
