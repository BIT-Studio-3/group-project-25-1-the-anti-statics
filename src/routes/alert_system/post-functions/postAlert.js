export async function postAlert(alertData) {
  try {
    console.log("Posting alert with data:", alertData);

    alertData.alertLevel = parseInt(alertData.alertLevel);
    const response = await fetch('https://group-project-25-1-the-anti-statics-api.onrender.com/api/v1/alerts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(alertData),
    });

    if (!response.ok) {
      return { postError: "Failed to post alert. Please try again later." };
    }

    const data = await response.json();
    return { data }; // Return the response data (e.g., the created alert)
  } catch (error) {
    //Console the error
    console.log(error);
    //Return the error if the API is offline
    return {
      error: "The server is currently unreachable. Please try again later.",
    };
  }
}
