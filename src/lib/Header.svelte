<script>
    import { goto } from "$app/navigation";
  import AgencySelect from "$lib/agencySelect.svelte";
  import user from "../stores/user.js";
  import logo from "./Images/dma.png";

  import { isDark } from "../stores/theme.js"; 
  import { fly } from 'svelte/transition';
  import { fade } from 'svelte/transition';

  let isMenuOpen = false;

  const toggleTheme = () => {
    isDark.set(!$isDark); 
  };

  const logout = () => {
    user.set(null);
    goto("/login");
  };

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };
</script>

<header class:dark-mode={$isDark}>
  <h1 in:fade={{ duration: 500 }}><a href="/"><img src={logo} alt="Main Logo" height="60" /></a></h1>

  <nav id="main-drop">
    <ul class="main-menu">
      <li in:fly={{ y: 30, duration: 300 }}><a href="/weather_reports">Weather Reports</a></li>
      <li in:fly={{ y: 30, duration: 400 }}><a href="/seismic_reports">Seismic Reports</a></li>
      <li in:fly={{ y: 30, duration: 500 }}><a href="/roads">Road Conditions</a></li>
      <li in:fly={{ y: 30, duration: 600 }}><a href="/fenz">Fire and Emergency</a></li>
      <li in:fly={{ y: 30, duration: 800 }}><a href="/alerts">Post Alerts</a></li>
      <li in:fly={{ y: 30, duration: 900 }}><a href="/resources">Resources</a></li>
      <li in:fly={{ y: 30, duration: 900 }}><a href="/admin">Admin</a></li>
      <div in:fade={{ duration: 500 }} id="agency"><AgencySelect /></div>
      <button in:fade={{ duration: 500 }} class="theme-toggle desktop-only" on:click={toggleTheme}>
  {#if $isDark}☀️ Light{:else}🌙 Dark{/if}
</button>
      <button in:fade={{ duration: 500 }} class="logout-button" on:click={logout}>🔑 Log Out</button>
      <button in:fly={{ y: 30, duration: 300 }} class="hamburger-btn" on:click={toggleMenu}>☰</button>
    </ul>
  </nav>

  {#if isMenuOpen}
    <nav id="hamburger">
      <ul in:fade={{ duration: 100 }} out:fade={{ duration: 100 }}  class="hamburger-list">
        <li in:fly={{ y: 30, duration: 300 }}><a href="/weather_reports">Weather Reports</a></li>
        <li in:fly={{ y: 30, duration: 400 }}><a href="/seismic_reports">Seismic Reports</a></li>
        <li in:fly={{ y: 30, duration: 500 }}><a href="/roads">Road Conditions</a></li>
        <li in:fly={{ y: 30, duration: 600 }}><a href="/fenz">Fire and Emergency</a></li>
        <li in:fly={{ y: 30, duration: 800 }}><a href="/alerts">Post Alerts</a></li>
        <li in:fly={{ y: 30, duration: 900 }}><a href="/resources">Resources</a></li>
        <li><button class="theme-toggle" on:click={toggleTheme}>
          {#if $isDark}☀️ Light{:else}🌙 Dark{/if}
        </button></li>
        <button in:fly={{ y: 30, duration: 1000 }} class="logout-button-hamburger" on:click={logout}
          >🔑 Log Out</button
        >
      </ul>
    </nav>
  {/if}
</header>

<style>
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
    transition: background-color 0.3s ease;
  }

  h1 {
    transition: transform 0.3s;
  }

  h1:hover {
    transform: scale(1.1);
  }

  .main-menu {
    display: flex;
    list-style: none;
    gap: 10px;
    background-color: inherit;
  }

  .main-menu li {
    padding: 0.4em;
    width: 5em;
    text-align: center;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s;
  }

  .main-menu li:hover {
    background-color: green;
    transform: scale(1.1);
  }

  .main-menu li a {
    text-decoration: none;
    background-color: inherit;
    transition: color 0.3s ease;
  }

  .main-menu li:hover a {
    color: white;
  }

  .main-menu div {
    display: flex;
    align-items: center;
  }

  .theme-toggle {
    background-color: white;
    color: #333;
    padding: 0.6em;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .theme-toggle:hover {
    background-color: yellow;
    color: black;
    transform: scale(1.1);
  }

  :not(.dark-mode) .theme-toggle {
    background-color: #333;
    color: white;
  }

  :not(.dark-mode) .theme-toggle:hover {
    background-color: green;
    color: white;
  }

  .logout-button {
    display: flex;
    align-items: center;
    background-color: green;
    color: white;
    padding: 1em;
    border: none;
    border-radius: 4px;
    transition: transform 0.3s;
  }

  .logout-button:hover {
    cursor: pointer;
    background-color: yellow;
    color: #333;
    transform: scale(1.1);
  }

  .desktop-only {
    display: inline-block;
  }

  #hamburger {
    position: absolute;
    top: 6em;
    z-index: 1000;
  }

  .hamburger-list {
    list-style: none;
    padding: 1em;
    border: 3px solid green;
  }

  .hamburger-list li {
    padding: 0.5em;
    border-radius: 4px;
    transition: transform 0.3s;
  }

  .hamburger-list li a {
    background-color: white;
    text-decoration: none;
    border-radius: 4px;
    color: black;
  }

  .hamburger-list li a:focus,
  .hamburger-list li a:active {
    outline: none;
    background-color: green;
    color: white;
  }

  .hamburger-list li:hover {
    background-color: green;
    transform: scale(1.1);
  }

  .hamburger-list li:hover a {
    color: white;
  }

  .hamburger-btn {
    display: none;
  }

  .logout-button-hamburger {
    display: none;
  }

  .dark-mode {
    background-color: #1f1f1f;
  }

  .dark-mode a,
  .dark-mode .main-menu li a,
  .dark-mode .hamburger-list li a {
    color: white;
    background-color: inherit;
  }

  .dark-mode nav,
  .dark-mode .main-menu,
  .dark-mode #agency {
    background-color: transparent;
    color: white;
  }

  .dark-mode .main-menu li,
  .dark-mode .hamburger-list li {
    background-color: #2b2b2b;
  }

  .dark-mode .main-menu li:hover,
  .dark-mode .hamburger-list li:hover {
    background-color: #444;
  }

  .dark-mode .hamburger-list {
    background-color: #2a2a2a;
    border-color: #555;
  }

  .dark-mode .hamburger-btn {
    background-color: #2a2a2a;
    color: white;
    border: 1px solid #444;
  }

  .dark-mode .hamburger-btn:hover {
    background-color: #444;
    color: #fff;
  }

  @media (max-width: 1200px) {
    .desktop-only,
    .main-menu li,
    .logout-button {
      display: none !important;
    }

    .hamburger-btn {
      display: flex;
      padding: 0.4em 0.5em;
      font-size: x-large;
      font-weight: bolder;
      border: none;
      border-radius: 4px;
      align-items: center;
      transition: transform 0.3s;
    }

    .hamburger-btn:hover {
      background-color: green;
      color: white;
      cursor: pointer;
      transform: scale(1.1);
    }

    .logout-button-hamburger {
      display: flex;
      width: 100%;
      background-color: green;
      color: white;
      padding: 0.3em;
      border: none;
      border-radius: 4px;
      transition: transform 0.3s;
    }

    .logout-button-hamburger:hover {
      cursor: pointer;
      background-color: yellow;
      color: #333;
      transform: scale(1.1);
    }

    #hamburger {
      display: block;
    }
  }
</style>
