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

    // Waiting for weather data readyness
    await temperatureLayer.onSourceReadyAsync();
    await radarLayer.onSourceReadyAsync();
    await windLayer.onSourceReadyAsync();
    await precipitationLayer.onSourceReadyAsync();

    const updateMarkers = () => {
      markerStatus = markerManager.update();

      if (!markerStatus) return;

      // Remove the div that corresponds to removed markers
      markerStatus.removed.forEach((pb) => {
        const markerDiv = markerLogicContainer[pb.id];
        delete markerLogicContainer[pb.id];
        markerContainer.removeChild(markerDiv);
      });

      // Update the div that corresponds to updated markers
      markerStatus.updated.forEach((pb) => {
        const markerDiv = markerLogicContainer[pb.id];
        updateMarkerDiv(pb, markerDiv);
      });

      // Create the div that corresponds to the new markers
      markerStatus.new.forEach((pb) => {
        const markerDiv = makeMarker(
          pb,
          temperatureLayer,
          radarLayer,
          precipitationLayer,
          new Date()
        );
        markerLogicContainer[pb.id] = markerDiv;
        markerContainer.appendChild(markerDiv);
      });
    };

    const softUpdateMarkers = () => {
      if (!markerStatus) return;

      markerStatus.updated.forEach((abstractMarker) => {
        markerManager.softUpdateAbstractMarker(abstractMarker);
        const markerDiv = markerLogicContainer[abstractMarker.id];
        updateMarkerDiv(abstractMarker, markerDiv);
      });

      markerStatus.new.forEach((abstractMarker) => {
        markerManager.softUpdateAbstractMarker(abstractMarker);
        const markerDiv = markerLogicContainer[abstractMarker.id];
        updateMarkerDiv(abstractMarker, markerDiv);
      });
    };

    map.on("move", softUpdateMarkers);
    map.on("moveend", updateMarkers);
    map.once("idle", () => {
      updateMarkers();
    });
  });

  async function loadScripts() {
    const scripts = [
      'https://cdn.maptiler.com/maptiler-sdk-js/v3.2.0/maptiler-sdk.umd.min.js',
      'https://cdn.maptiler.com/maptiler-weather/v3.0.1/maptiler-weather.umd.min.js',
      'https://cdn.maptiler.com/maptiler-marker-layout/v2.0.1/maptiler-marker-layout.umd.min.js',
      'https://cdn.jsdelivr.net/npm/suncalc@1.9.0/suncalc.min.js'
    ];

    for (const src of scripts) {
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }

    // Load CSS
    const link = document.createElement('link');
    link.href = 'https://cdn.maptiler.com/maptiler-sdk-js/v3.2.0/maptiler-sdk.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }

  function makeMarker(
    abstractMarker,
    temperatureLayer,
    radarLayer,
    precipitationLayer,
    date
  ) {
    const marker = document.createElement("div");
    marker.classList.add("marker");
    marker.classList.add("fade-in-animation");
    marker.style.setProperty("width", `${abstractMarker.size[0]}px`);
    marker.style.setProperty("height", `${abstractMarker.size[1]}px`);
    marker.style.setProperty(
      "transform",
      `translate(${abstractMarker.position[0]}px, ${abstractMarker.position[1]}px)`
    );

    const lonLat = abstractMarker.features[0].geometry.coordinates;
    const temperatureData = temperatureLayer.pickAt(lonLat[0], lonLat[1]);
    const precipitationData = precipitationLayer.pickAt(lonLat[0], lonLat[1]);
    const radarData = radarLayer.pickAt(lonLat[0], lonLat[1]);

    const radarDBz = radarData?.value || -20;
    const precipMmH = precipitationData?.value || 0;
    const temperatureDeg = temperatureData?.value || 0;
    const temperature = temperatureData?.value.toFixed(1);

    const sunPosition = SunCalc.getPosition(date, lonLat[1], lonLat[0]);
    const isNight = sunPosition.altitude < 0;

    // Determine weather condition using Meteocons naming
    let mainWeatherIconURL = "src/lib/Images/weather-icons/wi_";

    // Heavy precipitation
    if (precipMmH > 5) {
      if (temperatureDeg < -1) {
        mainWeatherIconURL += "snow";
      } else {
        mainWeatherIconURL += radarDBz > 30 ? "thunderstorms" : "rain";
      }
    }
    // Light precipitation  
    else if (precipMmH > 0.2) {
      if (temperatureDeg < -1) {
        mainWeatherIconURL += "snow";
      } else {
        mainWeatherIconURL += "drizzle";
      }
    }
    // No precipitation - based on cloud cover
    else {
      if (radarDBz < 0) {
        // Clear conditions
        mainWeatherIconURL += isNight ? "clear-night" : "clear-day";
      } else if (radarDBz < 10) {
        // Partly cloudy
        mainWeatherIconURL += isNight ? "partly-cloudy-night" : "partly-cloudy-day";
      } else if (radarDBz < 20) {
        // Overcast
        mainWeatherIconURL += "overcast";
      } else {
        // Very cloudy/stormy but no precip
        mainWeatherIconURL += "cloudy";
      }
    }

    mainWeatherIconURL += ".svg";

    marker.innerHTML = `
      <img class="markerMainWeatherIcon" src=${mainWeatherIconURL}></img>
      <div class="markerTemperature">${temperature ? `${temperature}°` : ''}</div>
    `;
    return marker;
  }

  function updateMarkerDiv(abstractMarker, marker) {
    marker.style.setProperty("width", `${abstractMarker.size[0]}px`);
    marker.style.setProperty("height", `${abstractMarker.size[1]}px`);
    marker.style.setProperty(
      "transform",
      `translate(${abstractMarker.position[0]}px, ${abstractMarker.position[1]}px)`
    );
  }
</script>

<div class="app-container">
  <div bind:this={mapContainer} class="map"></div>
  <div bind:this={markerContainer} class="marker-container"></div>
</div>

<style>

.app-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
}

.marker-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
  overflow: hidden;
}

:global(.marker) {
  position: absolute;
  pointer-events: none;
  z-index: 3;
  }

  :global(.markerMainWeatherIcon) {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.8));
  }

  :global(.markerTemperature) {
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    font-size: 15px;
    color: white;
    text-shadow: 0px 0px 4px black;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  :global(.fade-in-animation) {
    animation: fadeIn 0.5s ease forwards;
  }
</style>