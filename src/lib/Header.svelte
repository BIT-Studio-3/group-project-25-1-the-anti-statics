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

  const closeMenu = () => {
    isMenuOpen = false;
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
      <li in:fly={{ y: 30, duration: 800 }}><a href="/damages">Damages</a></li>
      <li in:fly={{ y: 30, duration: 900 }}><a href="/hazards">Hazards</a></li>
      <li in:fly={{ y: 30, duration: 900 }}><a href="/incident_controller">Incident Controller</a></li>
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
        <li in:fly={{ y: 30, duration: 300 }}><a href="/weather_reports" on:click={closeMenu}>Weather Reports</a></li>
        <li in:fly={{ y: 30, duration: 400 }}><a href="/seismic_reports" on:click={closeMenu}>Seismic Reports</a></li>
        <li in:fly={{ y: 30, duration: 500 }}><a href="/roads" on:click={closeMenu}>Road Conditions</a></li>
        <li in:fly={{ y: 30, duration: 600 }}><a href="/fenz" on:click={closeMenu}>Fire and Emergency</a></li>
        <li in:fly={{ y: 30, duration: 800 }}><a href="/alerts" on:click={closeMenu}>Post Alerts</a></li>
        <li in:fly={{ y: 30, duration: 900 }}><a href="/resources" on:click={closeMenu}>Resources</a></li>
        <li in:fly={{ y: 30, duration: 500 }}><a href="/admin" on:click={closeMenu}>Admin</a></li>
        <li in:fly={{ y: 30, duration: 600 }}><a href="/damages" on:click={closeMenu}>Damages</a></li>
        <li in:fly={{ y: 30, duration: 800 }}><a href="/hazards" on:click={closeMenu}>Hazards</a></li>
        <li in:fly={{ y: 30, duration: 900 }}><a href="/incident_controller" on:click={closeMenu}>Incident Controller</a></li>
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
  h1{
    transition: transform 0.3s;
  }
  h1:hover{
    transform: scale(1.1);
  }
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
    transition: transform 0.3s;
  }
  .logout-button:hover {
    cursor: pointer;
    background-color: yellow;
    transform: scale(1.1);
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
    transition: background-color 0.3s ease;
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
    transition: transform 0.3s;
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
    transition: color 0.3s ease;
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

  .hamburger-list li a {
  background-color: white;
}

   .dark-mode {
    background-color: #1f1f1f;
  }

  .dark-mode a {
    color: #f0f0f0;
  }

  .dark-mode nav {
    background-color: #1f1f1f;
  }

.dark-mode .main-menu li {
  background-color: #2b2b2b;
  color: white;
}

  .dark-mode .main-menu li:hover {
    background-color: #444;
  }

  .dark-mode .main-menu li a {
  color: white;
}
.dark-mode .main-menu li:hover a {
  color: #f0f0f0;
}


.dark-mode #agency {
  background-color: transparent;
  color: white;
}

.dark-mode .main-menu {
  background-color: transparent;
}

.dark-mode .hamburger-list {
  background-color: #2a2a2a;
  border-color: #555;
}

.dark-mode .hamburger-list li a {
  background-color: inherit;
  color: white;
}

.dark-mode .hamburger-list li:hover {
  background-color: #444;
}

.dark-mode .hamburger-list li:hover a {
  color: #f0f0f0;
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

.desktop-only {
  display: inline-block;
}

  @media (max-width: 1400px) {
     .desktop-only {
    display: none !important;
  }
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
      align-items: center;
      font-weight: bolder;
      font-size: x-large;
      transition: transform 0.3s;
    }
    .hamburger-btn:hover {
      background-color: green;
      color: white;
      cursor: pointer;
      border-radius: 4px;
      transform: scale(1.1);
    }
    #hamburger {
      display: block;
      z-index: 1000;
    }
    .hamburger-list {
      display: block;
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
    }
    .hamburger-list li:hover a {
      background-color: inherit;
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

    .dark-mode .hamburger-list {
  background-color: #2a2a2a;
  border-color: #555;
}

.dark-mode .hamburger-list li {
  background-color: #2a2a2a;
}

.dark-mode .hamburger-list li a {
  background-color: inherit;
  color: white;
}

.dark-mode .hamburger-list li:hover {
  background-color: #444;
}

.dark-mode .hamburger-list li:hover a {
  color: #f0f0f0;
}
  }
  
  
</style>
