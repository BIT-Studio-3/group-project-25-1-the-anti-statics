<script>
    const navLinks = [
        {href: '/weather_reports_page', text: 'Weather Reports'},
        {href: '/seismic_reports_page', text: 'Seismic and Volcanic Activity'},
        {href: '/road_conditions_page', text: 'Road Conditions'},
        {href: '/fire_and_emergency_page', text: 'Fire and Emergency Reports'},
        {href: '/rss', text: 'RSS Feed'},
        {href: '/alert_system', text: 'Post an Alert'},
        {href: '/Resources_Availability_Form', text: 'Post Resources Availability'}
    ];
    
    let isDropdownOpen = false;
    function toggleDropdown() {
            isDropdownOpen = !isDropdownOpen;
        }
    
        function closeDropdown() {
            isDropdownOpen = false;
        }
    
        import { page } from "$app/stores";
    
        $: route = $page.route.id;
    
        import AgencySelect from "$lib/agencySelect.svelte";
    
        import { onMount } from 'svelte';

        let isSmallScreen = false;

        onMount(() => {
            isSmallScreen = window.innerWidth <= 768;
            window.addEventListener('resize', () => {
                isSmallScreen = window.innerWidth <= 768;
                if (!isSmallScreen) {
                    isDropdownOpen = false;
                }
            });
        });

    </script>
    
    
    <div class="navbar">
        <a href="/">The Anti-Statics Disaster Management System</a>
    
        
            <button class="menu-toggle" on:click={toggleDropdown}> 
                ☰
            </button>
        <nav>
               
                <nav class="nav-links"> 
                    {#each navLinks as { href, text }} 
                    <a href={href} class="nav-link" on:click={closeDropdown} class:active={$page.route.id === href}>{text}</a>

                    {/each}
                    <AgencySelect />
                  </nav>
        </nav>
    
        {#if isDropdownOpen} 
        <div class="dropdown">
          {#each navLinks as { href, text }}
            <a href={href} class="dropdown-link">{text}</a>
          {/each}
        </div>
    {/if}
    </div>
    
    <style>
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
          flex-direction: column; 
          align-items: center;
          position: relative;
          width: 100%;
          box-sizing: border-box;
        }
    
        .nav-links {
          display: flex;
          justify-content: space-evenly;
          width: 100%;
          gap: 40px;
          background-color: #B5D5C5;
          flex-wrap: wrap;
        }
    
        .menu-toggle { 
          display: none;
          font-size: 30px;
          background: none;
          border: 1px solid;
          color: white;
          cursor: pointer;
          padding: 10px;
          position: absolute;
          right: 20px;
          top: 20px;
        }
    
        .nav-link { 
          text-decoration: none;
          background-color:#B5D5C5;
          color: #333;
          font-size: 1.4em;
          font-weight: 500;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }
      
        .nav-link:hover {
            transition: cubic-bezier(0.075, 0.82, 0.165, 1);
            padding: 0px 10px;
          background-color: #555;
          color: white; 
        }
    
        .dropdown {  
          display: flex;
          flex-direction: column;
          width: 100%;
          background-color: #333;
          position: absolute; 
          top: 110px;
          right: 0;
          padding: 10px 0;
          z-index: 999; 
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
    
    
        @media (max-width: 768px) {  
          .navbar {
            padding: 15px;
          }
    
          .nav-links {
            display: none;
            width: 100%;
            flex-direction: column;
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