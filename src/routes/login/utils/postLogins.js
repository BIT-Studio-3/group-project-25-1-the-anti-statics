import user from '../../../stores/user.js';

export async function postLogin(userData) {
  try {
    console.log("Posting user with data:", userData);

    // Simulated response instead of actual fetch
    return new Promise((resolve) => {
      setTimeout(() => {
        const dummyResponse = {
          id: 1,
          username: userData.username,
          token: "dummy-jwt-token",
        };

        // Simulating invalid login scenario
        if (userData.username !== "testuser" || userData.password !== "password123") {
          resolve({ error: "Invalid username or password" });
          return;
        }

        // Update user store
        user.update(val => val = { ...dummyResponse });

        resolve({ data: dummyResponse });
      }, 1000); // Simulating a 1-second delay
    });

  } catch (error) {
    console.log(error);
    return {
      error: "An unexpected error occurred.",
    };
  }
}
