<script>
    export let title = ""; 
    import { isDark } from "../stores/theme.js";
  </script>
  
  <div class="form-container" class:dark={$isDark}>
  <h2>{title}</h2>
  <slot />
</div>

<style>
  .form-container {
    background-color: white;
    color: black;
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .form-container h2 {
    margin-bottom: 1em;
    font-size: 1.5rem;
    color: #2b5876;
    text-align: center;
  }

  /* Dark mode styles */
  .dark.form-container {
    background-color: #1f1f1f;
    color: #f0f0f0;
  }

  .dark.form-container h2 {
    color: #f0f0f0;
  }
</style>
  