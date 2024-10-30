<script>
    import Header from '../lib/Header.svelte';
    import Footer from '../lib/Footer.svelte';
</script>

<Header />

<div class="AlertsCard">
    <h3>Recent Alerts</h3>
    <ul class="AlertsList">
        <li>Theres been a mutiny in Nelson<br>
            18/10/2024 9:32am</li>
        <li> </li>
    </ul>
</div>

<style>

    .AlertsCard{
        display: flex;
        flex-direction: column;
        border: solid;
        width: 25em;
        min-height: 80vh;
        margin-top: 0.5em;
    }

    .AlertsCard h3 {
        margin-top: 0.5em;
        font-size: 180%;
        text-align: center;
    }
    
</style>

<Footer />