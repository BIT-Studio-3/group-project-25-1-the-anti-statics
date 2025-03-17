<script>
  import { selectedAgency } from "$lib/stores.js";

  import Map from "../lib/Map.svelte";

  //Export the load function
  export let data;
  const { alerts, error, message } = data;

  import { format } from 'date-fns';
</script>

<div class="PageContentContainer">
  {#if error}
    <div>{error}</div>
  {:else if message}
    <p>{message}</p>
  {:else}
    <div class="AlertsCard">
      <h3>Recent Alerts</h3>
      <ul class="AlertsList">
        {#each alerts as alert}
          <li>{alert.title}</li>
          <li>{alert.emergencyType}</li>
          <li>{alert.alertLevel}</li>
          <li>{alert.region}</li>
          <li>{alert.description}</li>

          <li>Alerted posted at: {format(new Date(alert.createdAt), 'MM/dd/yyyy hh:mm a')}</li>
          <li>Updated at: {format(new Date(alert.updatedAt), 'MM/dd/yyyy hh:mm a')}</li>
        {/each}
      </ul>
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

  img {
    max-height: 90%;
    width: auto;
  }

  .PageContentContainer {
    display: flex;
    flex-direction: row;
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

  .AlertsList li {
    margin-top: 0.5em;
    list-style: none;
    padding-left: 0.5em;
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
</style>
