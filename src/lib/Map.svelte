<!-- https://docs.maptiler.com/svelte/?utm_medium=social&utm_source=youtube&utm_campaign=2022-08%20|%20cloud%20|%20maps%20in&utm_content=map%20in%20svelte&utm_term=desklink -->
<script>
    import { onMount } from 'svelte';
    import maplibre from 'maplibre-gl';
    const { Map } = maplibre; 
    
    let mapContainer;
    let map;
    let zoom;
    let center = {};
  
    onMount(() => {
      map = new maplibre.Map({
        container: mapContainer, 
        style: "https://api.maptiler.com/maps/streets/style.json?key=TF6Py0XR1AgDeYc7OFw8",
        center: [171.8890, -40.9006], 
        zoom: 5, 
      });
  
      map.addControl(new maplibre.NavigationControl(), 'top-left');
    });
  </script>
  
  <main>
    <div class="map-wrap">
      <div class="map" bind:this={mapContainer}></div>
      <a href="https://www.maptiler.com" class="watermark">
        <img src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo"/>
      </a>
    </div>
  </main>
  
  <style>
    .map-wrap {
      position: relative;
      width: 100%;
      height: calc(100vh - 77px);
    }
  
    .map {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  
    .watermark {
      position: absolute;
      left: 10px;
      bottom: 10px;
      z-index: 999;
    }
  </style>
  