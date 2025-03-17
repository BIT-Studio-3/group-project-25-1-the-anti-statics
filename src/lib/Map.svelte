<!-- https://docs.maptiler.com/svelte/?utm_medium=social&utm_source=youtube&utm_campaign=2022-08%20|%20cloud%20|%20maps%20in&utm_content=map%20in%20svelte&utm_term=desklink -->
<script>
  import { onMount } from 'svelte';
  //import maplibre from 'maplibre-gl';
  import {Map, MapStyle, Marker, config} from '@maptiler/sdk';
  import '@maptiler/sdk/dist/maptiler-sdk.css';

  
  let mapContainer;
  let map;

  const locations = [
  { lng: 170.5028, lat: -45.8788, title: 'Dunedin' },
  { lng: 172.6365, lat: -43.5321, title: 'Christchurch' },
  { lng: 175.2793, lat: -37.7870, title: 'Hamilton' },
];

config.apiKey = 'TF6Py0XR1AgDeYc7OFw8';


  onMount(() => {
    map = new Map({
      container: mapContainer,
      style: MapStyle.STREETS,
      center: [171.8890, -40.9006], 
      zoom: 4.5, 
    });
    
    locations.forEach(location => {
      new Marker({color: "#FF0000"})
      .setLngLat([location.lng, location.lat])
      .addTo(map);
   
    });
  });
</script>

<div class="map-wrap">
  <div class="map" bind:this={mapContainer}></div>
</div>

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
</style>
