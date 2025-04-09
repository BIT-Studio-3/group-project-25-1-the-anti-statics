<script>
  import { onMount } from "svelte";
  import AgencySelect from "$lib/agencySelect.svelte";
  import user from "../stores/user.js"; // Import the user store

  import logo from "./Images/dma.png";

  // Define the logout function
  const logout = () => {
    // Clear the user from the store
    user.set(null);
    goto("/login");
  };

  let isMenuOpen = false; // State variable to track if the menu is open
  let dropdownMenu;
  let hamburgerButton;
  // Function to toggle the menu open/closed
  const hamburgerToggle = () => {
    isMenuOpen = !isMenuOpen;
  };

  function hideDropdown(event) {
    if (
      isMenuOpen &&
      dropdownMenu &&
      !dropdownMenu.contains(event.target) &&
      event.target !== hamburgerButton
    ) {
      isMenuOpen = false;
    }
  }

  // Add the event listener to hide the dropdown when clicking outside
  onMount(() => {
    document.addEventListener("click", hideDropdown);
  });
</script>

<header>
  <h1><a href="/"><img src={logo} alt="Main Logo" height="60" /></a></h1>
  <nav id="main-drop">
    <ul>
      <li><a href="/seismic_reports_page">Seismic Reports</a></li>
      <li><a href="/road_conditions_page">Planets</a></li>
      <li><a href="/fire_and_emergency_page">Contact</a></li>
      <li><a href="/rss">Extras</a></li>
      <li><a href="/alert_system">Post an alert</a></li>
      <li><a href="/Resources_Availability_Form">Resources</a></li>
      <li><AgencySelect /></li>
      <li>
        <button class="logout-button" on:click={logout}>ꄗ Log Out</button>
      </li>
    </ul>
    <button bind:this={hamburgerButton} on:click={hamburgerToggle}>☰</button>
  </nav>
  <nav id="hamburger" bind:this={dropdownMenu} class={isMenuOpen ? "open" : ""}>
    <ul>
      <li><a href="/seismic_reports_page">Information</a></li>
      <li><a href="/road_conditions_page">Planets</a></li>
      <li><a href="/fire_and_emergency_page">Contact</a></li>
      <li><a href="/rss">Extras</a></li>
      <li><a href="/alert_system">Post an alert</a></li>
      <li><a href="/Resources_Availability_Form">Resources</a></li>
    </ul>
  </nav>
</header>

<style>
  * {
    background-color: white;
  }
  .logout-button {
    background-color: #b5d5c5;
    font-size: 1.4em;
    padding: 10px;
    color: #333;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .logout-button:hover {
    background-color: #555;
    color: white;
  }

  #main-drop button {
    transition: background-color 0.3s transform 0.3s;
  }
  #main-drop button:hover {
    transform: scale(1.1);
  }
  header {
    color: white;
    padding: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky; /* This makes the header sticky */
    top: 0; /* This ensures the header sticks to the top of the page */
    z-index: 1000; /* Ensures the header stays above other content */
  }
  h1 {
    text-align: center;
    text-transform: uppercase;
    text-decoration: underline;
    letter-spacing: 10px;
    margin-left: 1em;
    transition: transform 0.3s;
  }
  h1:hover {
    transform: scale(1.1);
  }
  h1 a {
    color: white;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    border-radius: 10px;
    margin-inline: 20px;
  }
  ul li {
    padding-inline: 1em;
    margin-inline: 1em;
    padding: 1em;
    font-weight: bold;
    transition:
      background-color 0.3s,
      transform 0.3s;
  }
  ul li:hover {
    background-color: white;
    border-radius: 5px;
    transform: scale(1.1);
    cursor: pointer;
  }
  ul li:hover a {
    color: #333;
  }
  li a {
    text-decoration: none;
    color: #333;
    color: white;
    text-transform: uppercase;
  }
  li {
    position: relative;
    /*Set reference point for dropdown-list*/
  }
  button {
    display: none;
    cursor: pointer;
  }
  #hamburger {
    display: none;
    position: absolute;
    background-color: #232323;
    top: 8rem;
    border: 2px white solid;
  }
  #hamburger ul {
    flex-direction: column;
    list-style: armenian;
    padding: 0.2em 0.5em 0.2em 0.5em;
  }
  #hamburger ul li {
    border-bottom: 3px solid white;
  }
  #hamburger a {
    letter-spacing: 0.1em;
  }
  @media (width <= 1080px) {
    header {
      gap: 1.5em;
    }
    button {
      display: flex;
      padding: 0.5em 0.8em 0.5em 0.8em;
      border: none;
      background-color: inherit;
      color: white;
      font-size: x-large;
    }
    button:hover {
      background-color: white;
      color: #333;
      font-weight: bolder;
      border-radius: 0.4em;
    }
    /*Main drop down menu*/
    #main-drop ul {
      display: none;
    }
    /* When the menu is open, show the items */
    #hamburger.open {
      display: flex;
      flex-direction: column;
      animation: fadeIn 0.5s ease-in-out;
    }
  }

  /* Keyframes for the drop effect */
  @keyframes dropIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Apply the dropIn animation to each item with a staggered delay */
  #hamburger ul li {
    animation: dropIn 0.5s ease forwards;
    opacity: 0;
  }

  #hamburger ul li:nth-child(1) {
    animation-delay: 0.1s;
  }
  #hamburger ul li:nth-child(2) {
    animation-delay: 0.2s;
  }
  #hamburger ul li:nth-child(3) {
    animation-delay: 0.3s;
  }
  #hamburger ul li:nth-child(4) {
    animation-delay: 0.4s;
  }
  #hamburger ul li:nth-child(5) {
    animation-delay: 0.5s;
  }
</style>
