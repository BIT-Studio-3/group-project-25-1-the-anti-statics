<script>
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import { onMount } from "svelte";
  let mergedAlerts = [];

  const feeds = [
    "https://alerthub.civildefence.govt.nz/rss/pwp",
    "https://alerts.metservice.com/cap/rss",
    "https://api.geonet.org.nz/cap/1.2/GPA1.0/feed/atom1.0/quake"
  ];

  const fetchAndMergeFeeds = async () => {
    try {
      const fetchPromises = feeds.map(feed => fetch(feed).then(response => response.text()));
      const results = await Promise.all(fetchPromises);
      
      results.forEach(result => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(result, "text/xml");
        
        // Extract relevant information. Adjust based on the XML structure.
        const items = Array.from(xmlDoc.querySelectorAll('item'));
        items.forEach(item => {
          mergedAlerts.push({
            title: item.querySelector('title').textContent,
            link: item.querySelector('link').textContent,
            description: item.querySelector('description').textContent,
            pubDate: item.querySelector('pubDate').textContent
          });
        });
      });
    } catch (error) {
      console.error('Error fetching or parsing feeds:', error);
    }
  };

  onMount(() => {
    fetchAndMergeFeeds();
  });
</script>

<Header />
<main>
  <h1>Combined Alerts</h1>
  <ul>
    {#each mergedAlerts as alert}
      <li>
        <a href={alert.link} target="_blank">{alert.title}</a>
        <p>{alert.description}</p>
        <p><small>{alert.pubDate}</small></p>
      </li>
    {/each}
  </ul>
</main>

<Footer />
