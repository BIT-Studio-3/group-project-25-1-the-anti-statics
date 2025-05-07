<script>
  import pfp from "/src/lib/Images/pfp.png";
</script>

<main>
  <section>
    <h1>🛡️ Admin Portal</h1>
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
  section * {
    color: white;
  }
  h1 {
    text-align: center;
    padding: 1em;
  }
  #user {
    border-top: 2px solid green;
    border-bottom: 2px solid green;
    padding: 0.5em;
    display: flex;
    align-items: center;
  }
  #user p:nth-child(1) {
    font-size: larger;
  }
  #user p:nth-child(2) {
    font-size: small;
  }
  #profile {
    margin-left: 0.8em;
  }
  ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 1em;
  }
  ul li{
    padding: 0.5em;
  }
  ul li a{
    padding: 0.5em;
    text-decoration: none;
  }
  ul li a:hover{
    background-color: white;
    padding: 0.5em;
    color: #333;
  }
</style>
