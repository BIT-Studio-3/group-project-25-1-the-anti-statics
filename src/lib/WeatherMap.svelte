<script>
  import { onMount } from 'svelte';

  let mapContainer;
  let map;
  let markerContainer;
  let markerLogicContainer = {};
  let markerStatus = null;

  onMount(async () => {
    // Load external scripts
    await loadScripts();

    // Configure MapTiler API key
    maptilersdk.config.apiKey = 'PTiQwkSKgUUcZly6mP8K';

    // Creating a map
    map = new maptilersdk.Map({
      container: mapContainer,
      style: maptilersdk.MapStyle.BASIC,
      geolocate: true,
    });

