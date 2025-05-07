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
    </section>
  </section>
</main>

<style>
  select {
    padding: 1em;
    border: 2px green solid;
    border-radius: 7px;
  }
  #user-background {
    background-color: white;
    border-radius: 7px;
    box-shadow: -1px 1px 8px #333;
    margin-inline: 0.7em;
  }
  #create-users input {
    padding-left: 0.9em;
    border-radius: 7px;
    border: 2px green solid;
  }
  #filter-box {
    display: flex;
    margin-left: auto;
    align-items: center;
    gap: 10px;
  }
  #create-users {
    display: flex;
    height: 3em;
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
