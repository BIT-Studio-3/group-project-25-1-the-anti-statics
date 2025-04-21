<script>
    export let obj;
  </script>
  
  <div class="hazardCard">
    <h2>{obj.name}</h2>
    <h3>Hazard Type:</h3>
    <p>{obj.type}</p>
    <h3>Hazard Level:</h3>
    <p>{obj.level}</p>
    <h3>City:</h3>
    <p>{obj.city}</p>
    <h3>Location:</h3>
    <p>{obj.location}</p>
    <h3>Description:</h3>
    <p>{obj.description}</p>
  </div>
  
  <style>
    .hazardCard {
      padding: 1rem;
      border-radius: 10px;
      background-color: white;
      color: #333;
      border: 1px solid #10941b;
      box-shadow: 0 0 6px rgba(76, 85, 76, 0.5);
      width: 80%; 
      margin-bottom: 1em; 
    }
  
    h2 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
      color: #2b5876;
      text-align: left; 
    }
  
    h3 {
      font-size: 1rem;
      margin-top: 1em;
      color: #213a49;
      text-align: left; 
    }
  
    p {
      font-size: 0.95rem;
      margin: 0.5em 0;
      line-height: 1.5;
      text-align: left; 
      width: 100%;
    }
  
    @media (max-width: 768px) {
      .hazardCard {
        width: 90%; 
      }
    }
  
    @media (max-width: 400px) {
      .hazardCard {
        width: 90%; 
      }
    }
  </style>