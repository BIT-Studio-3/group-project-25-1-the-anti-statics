<script>
    import Admin from "../../lib/Admin.svelte";
</script>

<main>
    <Admin/>
    <section>
        <h1>Dashboard</h1>
        <p>Active Users</p>
        <p>Total Disasters</p>
        <p>Active Disasters</p>
        <p>Total Hazards</p>
        <p>Total Damages</p>
        <p>Filter hazards and damages by incident</p>
    </section>
</main>

<style>
    main{
        display: grid;
        grid-template-columns: 1fr 2.3fr;
    }
</style>