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
