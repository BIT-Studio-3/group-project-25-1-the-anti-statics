<script>
    async function getFENZ(){
        const response = await fetch("https://gw.api.fireandemergency.nz/incr/v1/cadEvents/F4072896");
        const result = await response.json;
        console.log(result);
    }
</script>