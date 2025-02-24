<footer>
    <p>Copyright © 2024 Otago Polytechnic</p>
    <p>New Zealand 0800 762 786
        International +64 3 477 3014
        Hours: Monday – Friday, 8.00am – 5.00pm
        Email: info@op.ac.nz
    </p>
    <nav>
        <ul>
            <li><a href="https://www.police.govt.nz">Police</a></li>
            <li><a href="https://www.fireandemergency.nz">Fire and Emergency</a></li>
            <li><a href="https://www.metservice.com/?gad_source=1&gclid=Cj0KCQjwmt24BhDPARIsAJFYKk3jeOcUrmoC2Wnv3BTx1W7KwfvELbiGuK8cJaudLvKK4y0C8V_8CaAaAiJwEALw_wcB">Metservice</a></li>
        </ul>
    </nav>
</footer>

<style>

    p{
        padding:10px;
        text-align: center;
        background-color: inherit;
    }

    a {
        text-decoration: none;
        background-color: inherit;
    }

    footer {
        display: flex;
        width: 90%;
        position: relative;
        top: 0;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        box-shadow: 0 4px 5px #333;
        background: #689FD4;
        padding: 1em;
        margin: 0.5em;
        justify-self: center;
    }

    nav {
        display: flex;
        flex-direction: row;
        background-color: inherit;
    }

    nav ul {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        flex-flow: space-around;
        background-color: inherit;
    }

    nav ul li {
        list-style: none;
        padding: 0.5em;
        background-color: inherit;
    }

    @media (max-width: 600px) {

        footer {
            font-size: 70%;
        }
     
        nav ul {
            flex-direction: column;
        }
    }

</style>