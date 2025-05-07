<script>
  import pfp from "/src/lib/Images/pfp.png";
</script>

<main>
  <section>
    <h1>🛡️ Admin Portal</h1>
    <section id="user">
      <img src={pfp} alt="pfp" height="80" />
      <section id="profile">
        <p>Samuel Batchelor</p>
        <p>Administrator</p>
      </section>
    </section>
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
    border-top: 2px solid rgb(0, 75, 13);
    border-bottom: 2px solid grey;
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
  #profile{
    margin-left: 0.8em;
  }
</style>
