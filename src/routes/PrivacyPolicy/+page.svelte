<script context="module">
  import { redirect } from '@sveltejs/kit';
  import { login } from '../../stores/login.js';

  export async function load() {
    if (login.get()) {
      throw redirect(302, '/');
    }
  }
</script>

<script>
  import { goto } from '$app/navigation';
  import { isDark } from '../../stores/theme.js';

  const goBack = () => {
    goto('/login');
  };
</script>

<main class:dark={$isDark}>
  <h1>Privacy Policy</h1>

  <p>
    Your privacy matters to us. This policy outlines what kind of data we collect, how we use it,
    and how we keep it safe. We keep it minimal, clean, and respectful — just how privacy should be.
  </p>

  <h2>1. Information We Collect</h2>
  <p>
    We only collect the basics — like your username, login timestamps, and preferences (e.g. dark mode).
    We do not collect personal info like email addresses, phone numbers, or locations.
  </p>

  <h2>2. How We Use Your Data</h2>
  <p>
    The data we collect helps us improve the performance and experience of the app.
    It also helps with security, like detecting unusual login activity.
  </p>

  <h2>3. Cookies & Local Storage</h2>
  <p>
    We may use local storage to remember your theme preference or login status.
    This data stays on your device and is not shared with anyone else.
  </p>

  <h2>4. Data Sharing</h2>
  <p>
    We do not share your information with third parties. Full stop. This platform is for educational purposes,
    and your privacy is not a product.
  </p>

  <h2>5. Data Security</h2>
  <p>
    We use basic best practices to protect your data. No system is perfect,
    but we work hard to prevent unauthorised access or loss.
  </p>

  <h2>6. Changes to This Policy</h2>
  <p>
    If we ever update this policy, the changes will be reflected here. Keep an eye on this page
    if you're curious — we'll keep it transparent.
  </p>

  <h2>7. Contact</h2>
  <p>
    Got questions or concerns? Contact the site administrator or your course tutor.
    We’re happy to clarify anything.
  </p>

  <button on:click={goBack}>Go Back</button>
</main>

<style>
  main {
    padding: 4rem 2rem;
    max-width: 800px;
    margin: 0 auto;
    background: white;
    color: black;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    line-height: 1.8;
  }

  main.dark {
  background-color: #1a1a1a;
  color: white;
}

  p {
    margin-bottom: 1.5rem;
  }

  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }

  main.dark h1,
main.dark h2,
main.dark p {
  color: #f5f5f5;
}

  button {
    margin-top: 2rem;
    padding: 0.75rem 1.5rem;
    background: #0e927a;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
  }
  
  @media (max-width: 600px) {
  main {
    padding: 2rem 1rem;
    margin: 1rem;
    border-radius: 8px;
  }

  h1 {
    font-size: 1.5rem;
    text-align: center;
  }

  h2 {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.95rem;
  }

  button {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
  }
}
</style>

