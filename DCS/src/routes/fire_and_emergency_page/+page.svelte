<script>
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    async function getFENZ() {
      const response = await fetch(
        "https://gw.api.fireandemergency.nz/incr/v1/cadEvents/{CADnumber}"
      );
      const result = await response.json;
      console.log(result);
    }
  </script>
  
  <Header />
  
  <Footer />