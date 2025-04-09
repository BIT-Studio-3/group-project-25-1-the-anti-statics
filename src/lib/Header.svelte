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
</script>

<header>
  <h1><a href="/"><img src={logo} alt="Main Logo" height="60" /></a></h1>

  <nav id="main-drop">
    <ul class="main-menu">
      <li><a href="/seismic_reports_page">Seismic Reports</a></li>
      <li><a href="/road_conditions_page">Road Conditions</a></li>
      <li><a href="/fire_and_emergency_page">Fire and Emergency</a></li>
      <li><a href="/rss">RSS</a></li>
      <li><a href="/alert_system">Post Alerts</a></li>
      <li><a href="/Resources_Availability_Form">Resources</a></li>
      <div><AgencySelect /></div>
      <button class="logout-button" on:click={logout}>ꄗ Log Out</button>
      <button class="hamburger-btn" on:click={toggleMenu}>☰</button>
    </ul>
  </nav>

  {#if isMenuOpen}
    <nav id="hamburger">
      <ul class="hamburger-list">
        <li><a href="/seismic_reports_page">Seismic Reports</a></li>
        <li><a href="/road_conditions_page">Road Conditions</a></li>
        <li><a href="/fire_and_emergency_page">Fire and Emergency</a></li>
        <li><a href="/rss">RSS</a></li>
        <li><a href="/alert_system">Post Alerts</a></li>
        <li><a href="/Resources_Availability_Form">Resources</a></li>
        <div><AgencySelect /></div>
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
  h1 {
    transition: transform 0.5s;
  }
  h1:hover {
    transform: scale(1.2);
  }
  .logout-button {
    display: flex;
    align-items: center;
    background-color: green;
    transition:
      background-color 0.5s,
      transform 0.5s;
    color: white;
    padding: 0.3em 0.8em 0.3em 0.8em;
    border: none;
    border-radius: 4px;
  }
  .logout-button:hover {
    transform: scale(1.1);
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
    transition:
      background-color 0.5s,
      transform 0.5s;
    border-radius: 4px;
  }
  .main-menu li:hover {
    background-color: green;
    border-radius: 4px;
    transform: scale(1.1);
  }
  .main-menu li:hover a {
    background-color: inherit;
    color: white;
  }
  .main-menu li a {
    text-decoration: none;
    background-color: inherit;
  }
  @media (max-width: 1080px) {
    .main-menu li,
    div,
    .logout-button {
      display: none;
    }
    .hamburger-btn {
      display: flex;
      padding: 0.4em 0.5em 0.4em 0.5em;
      transition:
        background-color 0.5s,
        transform 0.5s;
      font-size: large;
      border: none;
      border-radius: 4px;
    }
    .hamburger-btn:hover {
      transform: scale(1.1);
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
      transition:
        background-color 0.5s,
        transform 0.5s;
      border-radius: 4px;
    }
    .hamburger-list li a {
      background-color: white;
      text-decoration: none;
      transition:
        background-color 0.5s,
        transform 0.5s;
      border-radius: 4px;
    }
    .hamburger-list li:hover a {
      background-color: green;
      color: white;
    }
    .hamburger-list li:hover {
      background-color: green;
      border-radius: 4px;
      transform: scale(1.1);
    }
    .logout-button-hamburger {
      display: flex;
      width: 100%;
      background-color: green;
      transition:
        background-color 0.5s,
        transform 0.5s;
      color: white;
      padding: 0.3em;
      border: none;
      border-radius: 4px;
    }
    .logout-button-hamburger:hover {
      transform: scale(1.1);
      cursor: pointer;
      background-color: yellow;
      color: #333;
    }
  }
</style>
