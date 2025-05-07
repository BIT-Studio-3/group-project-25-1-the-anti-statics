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
      <section id="query">
        <section id="search-bar">
          <input type="text" placeholder="⌕ Search users..." />
        </section>
        <section id="filters">
            <p>Filter by:</p>
          <select>
            <option>All Roles</option>
            <option>Administrator</option>
            <option>Incident Controller</option>
            <option>Planning Officer</option>
            <option>Operations Officer</option>
            <option>Logistics Officer</option>
            <option>Viewer</option>
          </select>
          <select>
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Pending</option>
          </select>
        </section>
      </section>
      <section id="table-container">
        <section id="table"></section>
      </section>
    </section>
  </section>
</main>

<style>
  #filters select{
    padding: 0.5em;
  }
  #table-container {
    background-color: red;
    overflow-x: auto;
  }
  #table {
    background-color: blue;
    width: 1000px;
  }
  #filters {
    background-color: aqua;
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 5px;
  }
  #search-bar {
    background-color: greenyellow;
    display: flex;
    align-items: center;
  }
  #search-bar input{
    border-radius: 5px;
    border: none;
    padding: 1em;
    height: 1em;
  }
  #query {
    background-color: yellow;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1.5fr;
  }
  #user-background {
    background-color: white;
    border-radius: 7px;
    box-shadow: -1px 1px 8px #333;
    margin-inline: 0.7em;
    display: flex;
    flex-direction: column;
  }
  h1 {
    background-color: white;
    padding: 1em;
  }
  main {
    display: grid;
    grid-template-columns: 1fr 2.3fr;
  }
  #container {
    background-color: rgba(255, 255, 255, 0.5);
    overflow-x: hidden;
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
  @media (width <= 910px) {
    #query {
      grid-auto-flow: row;
      grid-template-columns: 1fr;
    }
    #filters{
        justify-content: center;
    }
    #search-bar input{
        width: 100%;
    }
  }
</style>
