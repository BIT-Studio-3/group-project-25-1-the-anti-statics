<script>
  import pfp from "/src/lib/Images/pfp.png";
  import icon from "/src/lib/SVGs/server-solid.svg";
  import { isDark } from "../stores/theme.js";
</script>

<main class:dark={$isDark}>
  <section>
    <header>
      <img src={icon} alt="icon" height="40" />
      <h1>Admin Portal</h1>
    </header>

    <section id="user">
      <img src={pfp} alt="pfp" height="60" />
      <section id="profile">
        <p>Samuel Batchelor</p>
        <p>Administrator</p>
      </section>
    </section>

    <ul>
      <li><a href="/admin">📊 Dashboard</a></li>
      <li><a href="/admin/users">👥 User Management</a></li>
      <li><a href="/admin/logs">📁 Website Logs</a></li>
    </ul>
  </section>
</main>

<style>
  main {
    background-color: rgb(1, 100, 1);
    border-right: 3px solid white;
  }

  header {
    display: flex;
    align-items: center;
    margin-left: 1em;
  }

  h1 {
    padding: 1em;
    color: white;
  }

  #user {
    border-top: 2px solid green;
    border-bottom: 2px solid green;
    padding: 0.5em;
    display: flex;
    align-items: center;
  }

  #profile {
    margin-left: 0.8em;
  }

  #user p:nth-child(1) {
    font-size: larger;
  }

  #user p:nth-child(2) {
    font-size: small;
  }

  section * {
    color: white;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 1em;
  }

  ul li {
    padding: 0.5em;
  }

  ul li a {
    display: flex;
    padding: 0.5em;
    text-decoration: none;
    color: white;
    transition: transform 0.3s, background-color 0.3s, color 0.3s;
    border-radius: 5px;
  }

  ul li a:hover {
    background-color: white;
    color: #333;
    transform: scale(1.1);
  }

  :global(.dark) main {
    background-color: #093009;
    border-right: 3px solid #333;
  }

  :global(.dark) section * {
    color: #ffffff !important;
  }

  :global(.dark) ul li a:hover {
    background-color: #2e2e2e;
    color: white !important;
  }

  :global(.dark) #user {
    border-color: #195b19;
  }
</style>
