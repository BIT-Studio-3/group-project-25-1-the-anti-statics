export async function postLogin(userData) {
  try {
    const res = await fetch("https://group-project-25-1-the-anti-statics-api.onrender.com/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await res.json(); // Await the JSON response

    if (!res.ok) {
      // If response is not OK, throw an error
      return {postError: "Login Failed"}
    }

    return { data: result}; // Return the data correctly
  } catch (err) {
    return { error: "Server is offline." };
  }
}
