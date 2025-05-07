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

    <section id="user-background">
        <section id="create-users">
            <input type="text" placeholder="Search users..." />
            <section id="filter-box">
              <p>Filter by:</p>
              <select name=""></select>
              <select name=""></select>
            </section>
          </section>
    </section>
  </section>
</main>

<style>
  #user-background{
    background-color: white;
    border-radius: 7px;
    box-shadow: -1px 1px 8px #333;
    margin-inline: 0.7em;
  }
  #create-users input{
    padding-left: 1em;
  }
  #filter-box {
    display: flex;
    background-color: yellow;
    margin-left: auto;
  }
  #create-users {
    background-color: red;
    
    display: flex;
  }
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
  #container section {
    padding: 1em;
  }
  button {
    padding: 0.5em;
    margin-top: 1em;
    background-color: green;
    border: 3px solid green;
    border-radius: 7px;
    color: white;
    font-size: medium;
  }
</style>
