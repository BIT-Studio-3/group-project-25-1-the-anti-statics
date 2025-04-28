<script>
    export let title = ""; 
  </script>
  
  <div class="form-container">
    <h2>{title}</h2>
    <slot></slot>
  </div>
  
  <style>
    .form-container {
      padding: 2rem;
      border-radius: 10px;
      border: 1px solid #10941b;
      box-shadow: 0 0 6px rgba(76, 85, 76, 0.5);
      max-width: 90%;
      margin: 0 auto;
      background-color: #fff;
    }
  
    h2 {
      text-align: center;
      margin-bottom: 1.5rem;
      color: #213a49;
    }
  </style>
  