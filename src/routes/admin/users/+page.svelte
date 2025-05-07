<script>
  import Admin from "../../../lib/Admin.svelte";
</script>

<main>
  <Admin />
  <section id="container">
    <h1>User Management</h1>
    <section>
      <h2>User Accounts</h2>
      <h3>Manage all system users and their permissions</h3>
      <button>+ Add New User</button>
    </section>
  </section>
</main>

<style>
  h1 {
    background-color: white;
    padding: 1em;
  }
  main {
    display: grid;
    grid-template-columns: 1fr 2.3fr;
    overflow-y: auto;
  }
  #container {
    background-color: rgba(255, 255, 255, 0.5);
  }
  #container section{
    padding: 1em;
  }
  button{
    padding: 0.5em;
    margin-top: 1em;
    background-color: green;
    border: 3px solid green;
    border-radius: 7px;
    color: white;
    font-size: medium;
  }
</style>
