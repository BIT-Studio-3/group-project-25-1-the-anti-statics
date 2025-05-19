<script>
  let query = "";
  let suggestions = [];
  let selected = null;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  const fetchSuggestions = async () => {
    if (query.length < 3) {
      suggestions = [];
      return;
    }

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${encodeURIComponent(
        query
      )}&limit=5`
    );

    if (res.ok) {
      const data = await res.json();
      suggestions = data.map((entry) => ({
        display_name: entry.display_name,
        lat: entry.lat,
        lon: entry.lon,
      }));
    } else {
      suggestions = [];
    }
  };

  const handleSelect = (item) => {
    selected = item;
    query = item.display_name;
    suggestions = [];
    dispatch("select", item);
  };
</script>

<div class="autocomplete">
  <input
    type="text"
    bind:value={query}
    placeholder="Enter address"
    on:input={fetchSuggestions}
    autocomplete="off"
  />

  {#if suggestions.length > 0}
    <ul class="suggestions">
      {#each suggestions as item}
        <li on:click={() => handleSelect(item)}>{item.display_name}</li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .autocomplete {
    position: relative;
    width: 100%;
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
