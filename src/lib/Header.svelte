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
      <li><AgencySelect /></li>
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
        <li><AgencySelect /></li>
        <button class="logout-button" on:click={logout}>ꄗ Log Out</button>
        <button class="hamburger-btn" on:click={toggleMenu}>☰</button>
      </ul>
    </nav>
  {/if}
</header>

<style>
  .hamburger-btn {
    display: none;
  }
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
    background-color: rgb(207, 105, 105);
    gap: 10px;
  }
  .main-menu {
    display: flex;
    list-style: none;
    gap: 10px;
    background-color: yellow;
  }
  .main-menu li {
    background-color: red;
    padding: 0.4em;
    width: 5em;
    text-align: center;
  }
  @media (width <= 1080px) {
    .main-menu li,
    .logout-button {
      display: none;
    }
    .hamburger-btn {
      display: flex;
    }
  }
</style>
