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
  <h1>Terms of Service</h1>

  <p>
    Welcome! By accessing or using this application, you agree to the following terms and conditions.
    These are here to keep things fair, respectful, and secure for everyone.
  </p>

  <h2>1. Respectful Use</h2>
  <p>
    Please use this platform responsibly. Do not upload or share anything offensive, harmful, or illegal.
    Treat other users with respect — this is a shared space.
  </p>

  <h2>2. Account Responsibility</h2>
  <p>
    You’re responsible for keeping your login credentials safe. If someone else accesses your account
    because you shared your password, that’s on you.
  </p>

  <h2>3. Data Usage</h2>
  <p>
    We may store basic activity logs (e.g., last login time) to help improve performance and monitor usage.
    We don’t collect sensitive personal info and we don’t share your data with third parties.
  </p>

  <h2>4. Updates & Changes</h2>
  <p>
    We might update this platform from time to time. That could include new features, bug fixes,
    or design changes. By continuing to use the app, you accept any reasonable updates to these terms.
  </p>

  <h2>5. Limitation of Liability</h2>
  <p>
    This is a student-built platform. We try our best to keep it working smoothly, but we can’t
    guarantee it’s bug-free or always available. Use it at your own discretion.
  </p>

  <h2>6. Termination</h2>
  <p>
    If someone violates these terms or behaves abusively, their access may be revoked without notice.
    Be cool, and we’ll be cool too.
  </p>

  <h2>7. Questions?</h2>
  <p>
    If anything here is unclear, feel free to contact the admin team or your instructor. We’re happy to help.
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
