export async function postHazard(hazardInfo) {
  try {
    console.log("Posting hazard with info:", hazardInfo);

    hazardInfo.level = parseInt(hazardInfo.level);
    const response = await fetch('https://group-project-25-1-the-anti-statics-api-4tz3.onrender.com/api/v1/hazards', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hazardInfo),
    });

    if (!response.ok) {
      return { postError: "Failed to post hazard. Please try again later." };
    }

    const info = await response.json();
    return { info };
  } catch (error) {
    console.log(error);

    return {
      error: "The server is currently unreachable. Please try again later.",
    };
  }
}
