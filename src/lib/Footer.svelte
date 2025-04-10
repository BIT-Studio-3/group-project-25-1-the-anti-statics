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
        color: black;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
    }

    a {
        text-decoration: none;
        background-color: inherit;
        color: black;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
    }

    footer {
        display: flex;
        width: 100%;
        height: 10vh;
        box-sizing: border-box;
        position: relative;
        top: 0;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        background: #ffffff;
        padding: 1em;
        margin: 0.5em;
        margin-bottom: 0;
        justify-self: center;
        border-top: 5px rgb(37, 170, 24) solid;
    }

    nav {
        display: flex;
        flex-direction: row;
        background-color: inherit;
        padding: 1em;
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

    @media (max-width: 800px) {
        p {
            font-size: medium;
        }

        a {
            font-size: medium;
        }
        
        footer {
            font-size: 70%;
            height: auto;
            display:block;
        }
     
        nav {
            justify-content: center;
        }
    }

</style>