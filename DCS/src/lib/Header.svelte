<header>
    <h1>The GPTs Disaster Management System</h1>

    <div class="dropdown">
        <button class="dropdownbutton">Dropdown for other services</button>
        <div class="dropdowncontent">
            <a href="google.com">Police</a>
            <a href="google.com">Fire and Emergency</a>
            <a href="google.com">Metservice</a>
        </div>
    </div>
</header>

<style>
    * {
        font-family: sans-serif;
    }

    header {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    .dropdown {
        margin-top: 1em;
    }

    .dropdownbutton {
        width: 15vh;
        height: 5vh;
    }

    .dropdowncontent {
        display: none;
        position: absolute;        
    }

    .dropdown:hover .dropdowncontent{
        display: block;
    }

</style>