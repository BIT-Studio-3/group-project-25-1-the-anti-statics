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
      <button id="addUser">+ Add New User</button>
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
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th id="last_a">Last Active</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Samuel Batchelor</td>
              <td>batcsg1@student.op.ac.nz</td>
              <td>Admin</td>
              <td>2 hours ago</td>
              <td class="status"><p>Active</p></td>
              <td class="actions">
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>Hazel Mapuranga</td>
              <td>mapuhn1@student.op.ac.nz</td>
              <td>Admin</td>
              <td>4 hours ago</td>
              <td class="status"><p>Active</p></td>
              <td class="actions">
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>George Adamson</td>
              <td>adamgm3@student.op.ac.nz</td>
              <td>Admin</td>
              <td>8 hours ago</td>
              <td class="status"><p>Active</p></td>
              <td class="actions">
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  </section>
</main>

<style>
  .status p{
    background-color: rgb(107, 242, 123);
    width: 95%;
    padding: 0.1em;
    text-align: center;
    white-space: nowrap;
    border-radius: 4px;
    font-weight: bold;
    color: green;
  }
  #last_a{
    white-space: nowrap;
  }
  .actions {
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    align-items: center; 
    gap: 0.9em;
  }
  .actions button:first-of-type{
    color: blue;
  }
  .actions button:last-of-type{
    color: red;
  }
  .actions button {
    padding: 0.9em 1em 0.9em 1em;
    text-align: center;
    border: none;
    background-color: transparent;
    font-weight: bold;
    font-size: large;
  }
  #filters select {
    padding: 0.5em;
  }
  #table-container {
    overflow-x: auto;
    border-radius: 4px;
  }
  table{
    border-collapse: collapse;
  }
  tbody td {
    padding: 0.8em;
  }
  
  thead {
    background-color: rgb(240, 230, 230);
    text-align: left;
  }
  thead th {
    padding-left: 0.9em;
    padding-right: 2em;
    padding-block: 0.7em;
    text-transform: uppercase;
    color: grey;
    border-block: 1px solid rgb(179, 174, 174);
  }
  #filters {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 5px;
  }
  #search-bar {
    display: flex;
    align-items: center;
  }
  #search-bar input {
    border-radius: 5px;
    border: 1.5px solid gray;
    padding: 1em;
    height: 1em;
  }
  #query {
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
  #addUser {
    padding: 0.5em;
    margin-top: 1em;
    background-color: green;
    border: 2px solid green;
    border-radius: 7px;
    color: white;
    font-size: medium;
    transition:
      transform 0.3s,
      background-color 0.3s,
      color 0.3s;
  }
  #addUser:hover{
    transform: scale(1.1);
    background-color: white;
    color: #333;
  }
  button:hover{
    cursor: pointer;
  }
  @media (width <= 910px) {
    #query {
      grid-auto-flow: row;
      grid-template-columns: 1fr;
    }
    #filters {
      justify-content: center;
    }
    #search-bar input {
      width: 100%;
    }
  }
</style>
