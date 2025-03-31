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
      {#each alerts as alert}
      <ul class="AlertsList">
          <li>{alert.title}</li>
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
    </div>
  {/if}

  <figure class="pinmap">
    <h3>Active Disasters</h3>
    <Map />
  </figure>
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
    height: 100%;
    width: 100%;
  }

  .AlertsCard {
    display: flex;
    flex-direction: column;
    border: solid;
    width: 25em;
    min-height: 80vh;
    justify-self: left;
    color: #333;
  }

  .AlertsCard *{
    gap: 3em;
  }

  .AlertsList {
    padding: 1em;
    margin-bottom: 1em;
  }
  .AlertsList li {
    list-style: none;
    padding-left: 0.5em;
    background-color: #ec6969;
    
  }

  .pinmap {
    max-height: 100%;
    width: 600px;
    border: solid;
    text-align: center;
    background-color: #b7daf8;
  }

  .pinmap h3 {
    background-color: #b7daf8;
  }

  @media (max-width: 1200px) {
    /* For tablets and smaller desktops */
    .PageContentContainer {
      flex-direction: column; /* Stack the items vertically */
      align-items: center; /* Center items */
      gap: 10px;
    }

    .AlertsCard {
      width: 100%; /* Take full width on smaller screens */
      min-height: auto; /* Adjust height */
      margin-bottom: 1em; /* Add spacing between cards */
    }

    .pinmap {
      width: 100%; /* Make the map take full width */
      max-width: 500px; /* Limit map size */
    }
  }

  @media (max-width: 768px) {
    /* For mobile devices */
    .PageContentContainer {
      flex-direction: column; /* Stack the items vertically */
      align-items: center; /* Center items */
      gap: 15px;
    }

    .AlertsCard {
      width: 90%; /* Reduce the width to fit mobile screens */
      min-height: auto;
    }

    .pinmap {
      width: 100%; /* Make map fill the screen */
      max-width: 400px; /* Limit map size */
    }
  }

  @media (max-width: 480px) {
    /* For very small screens (phones in portrait mode) */
    .AlertsCard {
      width: 100%; /* Full width */
      padding: 0.5em; /* Reduce padding for mobile */
    }

    .pinmap {
      width: 100%; /* Full width for map */
      max-width: 300px; /* Limit map size on small screens */
    }
  }
</style>
