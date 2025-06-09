<script>
    import { isDark } from '../stores/theme.js';
  </script>
  
  <footer class:dark-mode={$isDark}>
    <div class="social-icons">
      <a href="https://www.police.govt.nz" target="_blank" aria-label="Police">
        <img src="https://badgesandmedals.com/wp-content/themes/yootheme/cache/7e/New-Zealand-Police-7e93734e.jpeg" alt="Police" />
      </a>
      <a href="https://www.fireandemergency.nz" target="_blank" aria-label="Fire and Emergency">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Fire_and_Emergency_New_Zealand_logo.svg/800px-Fire_and_Emergency_New_Zealand_logo.svg.png" alt="Fire Department" />
      </a>
      <a href="https://www.metservice.com" target="_blank" aria-label="MetService">
        <img src="https://about.metservice.com/assets/img/css/400Logo-generic.jpg" alt="Metservice" />
      </a>
    </div>
  
    <div class="contact-info">
      <p>Copyright © 2024 Otago Polytechnic</p>
      <p>
        New Zealand 0800 762 786 |
        International +64 3 477 3014 |
        Mon - Fri, 8:00am - 5:00pm |
        Email: info@op.ac.nz
      </p>
    </div>
  </footer>
  
  <style>
    footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-top: 5px solid rgb(37, 170, 24);
      padding: 1rem;
      background-color: #ffffff;
      color: black;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      transition: background-color 0.3s ease, color 0.3s ease;
    }
  
    .social-icons {
      display: flex;
      justify-content: center;
      gap: 2rem;
      padding: 1rem 0;

  
    .social-icons a img {
      width: 100px;
      height: 100px;
      object-fit: contain;
      transition: transform 0.2s ease;
    }
  
    .social-icons a:hover img {
      transform: scale(1.2);
    }
  
    .contact-info p {
      margin: 0.3em 0;
      text-align: center;
      font-size: 0.9rem;
    }
  
    .dark-mode {
      background-color: #1f1f1f;
      color: #f0f0f0;
    }
  
    .dark-mode .contact-info p {
      color: #f0f0f0;
    }
  
    @media (max-width: 768px) {
      .social-icons {
        gap: 1rem;
      }
  
      .social-icons a img {
        width: 38px;
        height: 38px;
      }
  
      .contact-info p {
        font-size: 0.8rem;
      }
    }
  </style>
  