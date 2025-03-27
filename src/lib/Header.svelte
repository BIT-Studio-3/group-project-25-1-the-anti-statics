<script>
const navLinks = [
    {href: '/', text: 'weather_reports_page'},
    {href: '/', text: 'seismic_reports_page'},
    {href: '/', text: 'road_conditions_page'},
    {href: '/', text: 'volcanic_activity_page'},
    {href: '/', text: 'fire_and_emergency_page'},
    {href: '/', text: 'rss'},
    {href: '/', text: 'alert_system'},
    {href: '/', text: 'Resources_Availability_Form'}
];

let isDropdownOpen = false;
function toggleDropdown() {
        isDropdownOpen = !isDropdownOpen;
    }

    import { page } from "$app/stores";

    $: route = $page.route.id;

    import AgencySelect from "$lib/agencySelect.svelte";
</script>


<div class="navbar">
    <a href="/">The Anti-Statics Disaster Management System</a>

    
        <button class="menu-toggle" on:click={toggleDropdown}> <!--Burger menu button for smaller screens-->
            ☰
        </button>
    <nav>
           
            <nav class="nav-links"> <!--navigation links for larger screens-->
                {#each navLinks as { href, text }}  <!--loop through the navLinks arrays to create a link for each item-->
                  <a href={href} class="nav-link">{text}</a>
                {/each}
                <AgencySelect />
              </nav>
    </nav>

    {#if isDropdownOpen}    <!--Conditional statement checking when isDropdownOpen variable is true or close-->
    <div class="dropdown">
      {#each navLinks as { href, text }} <!--loop through the navLinks arrays to create a link for each item in dropdown menu-->
        <a href={href} class="dropdown-link">{text}</a>
      {/each}
    </div>
{/if}
</div>

<style>
      @import url('https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap');
     * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    a{
      background-color: #B5D5C5;
      font-size: 35px;
      text-decoration: none;
     }

    .navbar {
      background-color: #B5D5C5;
      padding: 20px;
      color: #333;
      display: flex;
      flex-direction: column; /*items are stacked one below another*/
      align-items: center;
      position: relative; /*so the button can go over this area*/
    }

    .nav-links {
      display: flex;
      justify-content: space-evenly; /*spread links equally*/
      width: 100%;
      gap: 40px;
      background-color: #B5D5C5;
    }

    .menu-toggle { /*style for the hamburger button, hide it by default*/
      display: none; /*initially hide it*/
      font-size: 30px;
      background: none;
      border: 1px solid;
      color: white;
      cursor: pointer;
      padding: 10px;
      position: absolute; /*place it on top-right corner*/
      right: 20px;
      top: 20px;
    }

    .nav-link {  /*style for navigation links*/
      text-decoration: none;
      background-color:#B5D5C5;
      color: #333;
      font-size: 1.4em;
      font-weight: 500;
      border-radius: 5px;
      transition: background-color 0.3s ease; /*Smooth background change*/
      font-family: 'Saira Condensed', sans-serif;
    }
  
    .nav-link:hover {
        transition: cubic-bezier(0.075, 0.82, 0.165, 1);
        padding: 0px 10px;
      background-color: #555;
      color: white; 
    }

    .dropdown {  /*style, will be shown when menu is open*/
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: #333;
      position: absolute; /*so it appears below navbar*/
      top: 110px;
      right: 0;
      padding: 10px 0;
      z-index: 999; /*so it can show up on the top of other ealiments*/
    }

    .dropdown-link {
      text-decoration: none;
      color: white;
      padding: 10px 20px;
      text-align: center;
      font-size: 1rem;
      border-bottom: 1px solid #555;
    }

    .dropdown-link:hover {
      background-color: #78ad67;
      color: #333;
    }


    @media (max-width: 768px) {  /*this is for small screen devices with (max-width 768px)*/
      .navbar {
        padding: 15px;
      }

      .nav-links {
        display: none;
      }
  
      .menu-toggle {
        display: block;
      }

      .nav-link {
        width: 100%;
        text-align: center;
      }
    }
</style>

