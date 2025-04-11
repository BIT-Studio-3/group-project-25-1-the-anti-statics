<script>
  import { goto } from "$app/navigation";
  import AgencySelect from "$lib/agencySelect.svelte";
  import user from "../stores/user.js";
  import logo from "./Images/dma.png";

  let isMenuOpen = false;

  const logout = () => {
    user.set(null);
    goto("/login");
  };

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  import { fly } from 'svelte/transition';
</script>

<header>
  <h1><a href="/"><img src={logo} alt="Main Logo" height="60" /></a></h1>

  <nav id="main-drop">
    <ul class="main-menu">
      <li in:fly={{ y: 30, duration: 300 }}><a href="/weather_reports_page">Weather Reports</a></li>
      <li in:fly={{ y: 30, duration: 400 }}><a href="/seismic_reports_page">Seismic Reports</a></li>
      <li in:fly={{ y: 30, duration: 500 }}><a href="/road_conditions_page">Road Conditions</a></li>
      <li in:fly={{ y: 30, duration: 600 }}><a href="/fire_and_emergency_page">Fire and Emergency</a></li>
      <li in:fly={{ y: 30, duration: 700 }}><a href="/rss">RSS</a></li>
      <li in:fly={{ y: 30, duration: 800 }}><a href="/alert_system">Post Alerts</a></li>
      <li in:fly={{ y: 30, duration: 900 }}><a href="/Resources_Availability_Form">Resources</a></li>
      <div id="agency"><AgencySelect /></div>
      <button class="logout-button" on:click={logout}>🔑 Log Out</button>
      <button class="hamburger-btn" on:click={toggleMenu}>☰</button>
    </ul>
  </nav>

  {#if isMenuOpen}
    <nav id="hamburger">
      <ul class="hamburger-list">
        <li><a href="/weather_reports_page">Weather Reports</a></li>
        <li><a href="/seismic_reports_page">Seismic Reports</a></li>
        <li><a href="/road_conditions_page">Road Conditions</a></li>
        <li><a href="/fire_and_emergency_page">Fire and Emergency</a></li>
        <li><a href="/rss">RSS</a></li>
        <li><a href="/alert_system">Post Alerts</a></li>
        <li><a href="/Resources_Availability_Form">Resources</a></li>
        <button class="logout-button-hamburger" on:click={logout}
          >ꄗ Log Out</button
        >
      </ul>
    </nav>
  {/if}
</header>

<style>
  .main-menu div {
    display: flex;
    align-items: center;
  }
  .logout-button {
    display: flex;
    align-items: center;
    background-color: green;
    color: white;
    padding: 1em 1em 1em 1em;
    border: none;
    border-radius: 4px;
  }
  .logout-button:hover {
    cursor: pointer;
    background-color: yellow;
    color: #333;
  }
  #hamburger {
    display: none;
    position: absolute;
    top: 6em;
  }
  .hamburger-list {
    list-style: none;
  }
  .hamburger-btn {
    display: none;
  }
  .logout-button-hamburger {
    display: none;
  }
  * {
    background-color: white;
  }
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
    background-color: white;
    gap: 10px;
    border-bottom: 3px green solid;
  }
  .main-menu {
    display: flex;
    list-style: none;
    gap: 10px;
  }
  .main-menu li {
    padding: 0.4em;
    width: 5em;
    text-align: center;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
  }
  .main-menu li:hover {
    background-color: green;
    border-radius: 4px;
  }
  .main-menu li:hover a {
    background-color: inherit;
    color: white;
  }
  .main-menu li a {
    text-decoration: none;
    background-color: inherit;
    transition: color 0.3s ease;
  }
  @media (max-width: 1050px) {
    .main-menu li,
    .logout-button {
      display: none;
    }
    .hamburger-btn {
      display: flex;
      padding: 0.4em 0.5em 0.4em 0.5em;
      font-size: large;
      border: none;
      border-radius: 4px;
    }
    .hamburger-btn:hover {
      background-color: green;
      color: white;
      cursor: pointer;
      border-radius: 4px;
    }
    #hamburger {
      display: block;
    }
    .hamburger-list {
      display: block;
      padding: 1em;
    }
    .hamburger-list li {
      padding: 0.3em;
      border-radius: 4px;
    }
    .hamburger-list li a {
      background-color: white;
      text-decoration: none;
      border-radius: 4px;
    }
    .hamburger-list li:hover a {
      background-color: green;
      color: white;
    }
    .hamburger-list li:hover {
      background-color: green;
      border-radius: 4px;
    }
    .logout-button-hamburger {
      display: flex;
      width: 100%;
      background-color: green;
      color: white;
      padding: 0.3em;
      border: none;
      border-radius: 4px;
    }
    .logout-button-hamburger:hover {
      cursor: pointer;
      background-color: yellow;
      color: #333;
    }
  }
  
  
</style>
