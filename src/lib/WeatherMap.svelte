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

    // Waiting that the map is "loaded"
    await map.onReadyAsync();

    // The marker manager is in charge of computing the positions where markers
    // should be, sort them by POI rank and select non-overlaping places.
    const markerManager = new maptilermarkerlayout.MarkerLayout(map, {
      layers: ["City labels", "Place labels"],
      markerSize: [40, 70],
      offset: [0, -10],
      markerAnchor: "center",
      filter: (feature) => {
        return ["city", "village", "town"].includes(
          feature.properties.class
        );
      },
    });

    // Creating the weather layers...
    const temperatureLayer = new maptilerweather.TemperatureLayer({
      opacity: 0.7,
    });

    const radarLayer = new maptilerweather.RadarLayer({
      colorramp: maptilerweather.ColorRamp.builtin.RADAR_CLOUD,
    });

    const windLayer = new maptilerweather.WindLayer({
      colorramp: maptilerweather.ColorRamp.builtin.NULL,
      color: [255, 255, 255, 0],
      fastColor: [255, 255, 255, 100],
    });

    const precipitationLayer = new maptilerweather.PrecipitationLayer({
      colorramp: maptilerweather.ColorRamp.builtin.NULL,
    });

    // Setting the water layer partially transparent
    map.setPaintProperty("Water", "fill-color", "rgba(0, 0, 0, 0.7)");
    map.addLayer(temperatureLayer, "Place labels");
    map.addLayer(windLayer);
    map.addLayer(radarLayer);
    map.addLayer(precipitationLayer);
