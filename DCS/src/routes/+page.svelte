<script>
    import Header from '../lib/Header.svelte';
    import Footer from '../lib/Footer.svelte';
</script>

<Header />

<div class="PageContentContainer">
    <div class="AlertsCard">
        <h3>Recent Alerts</h3>
        <ul class="AlertsList">
            <li>Theres been a mutiny in Nelson<br>
                18/10/2024 9:32am</li>
            <li> </li>
        </ul>
    </div>

    <img src="src\lib\Images\New_Zealand_Regions.png" alt="A map of New Zealand">
</div>




<style>

    .PageContentContainer {
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;
    }

    .AlertsCard{
        display: flex;
        flex-direction: column;
        border: solid;
        width: 25em;
        min-height: 80vh;
        justify-self: left;
    }

    .AlertsCard h3 {
        margin-top: 0.5em;
        font-size: 180%;
        text-align: center;
    }

    img {
        justify-self: center;
        max-height: 100%;
        width: auto;
        border: solid;
    }

</style>

<Footer />

