<script>
  import { address } from "$lib/stores.js"; // Only keep the address store you want to set

  let query = "";
  let suggestions = [];
  let debounceTimeout;

  const fetchSuggestions = () => {
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(async () => {
      if (query.length < 4) {
        suggestions = [];
        return;
      }

      const res = await fetch(
        `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=5`
      );

      if (!res.ok) {
        suggestions = [];
        return;
      }

      const data = await res.json();
      
      const features = data.features;

      const nzFeatures = features.filter(
        (item) => item.properties.countrycode === "NZ"
      );

      console.log("Nominatim data:", nzFeatures);

      suggestions = nzFeatures.map((suggestion) => {
          const { housenumber, street, district, city } = suggestion.properties;
          const full_address = `${housenumber} ${street}, ${district}, ${city}`;
          return {
            full_address
          };
        });
    }, 500);
  };

  const selectHazard = (hazardAddress) => {
    suggestions = [];
    address.set(hazardAddress);
    query = hazardAddress; // Set local input to selected address
  };
</script>

<div class="autocomplete">
  <input
    type="text"
    bind:value={query}
    on:input={fetchSuggestions}
    placeholder="Enter address"
    autocomplete="off"
  />

  {#if suggestions.length > 0}
    <ul class="suggestions">
      {#each suggestions as suggestion}
        <li on:click={() => selectHazard(suggestion.full_address)}>
          {suggestion.full_address}
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .autocomplete {
    position: relative;
    width: 87%;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  .suggestions {
    position: absolute;
    z-index: 10;
    background: white;
    width: 100%;
    border: 1px solid #ccc;
    border-top: none;
    max-height: 200px;
    overflow-y: auto;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .suggestions li {
    padding: 0.75rem;
    cursor: pointer;
  }

  .suggestions li:hover {
    background-color: #f0f0f0;
  }
</style>
