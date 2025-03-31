export async function postHazard(hazardData) {
  try {
    console.log("Posting hazard with data:", hazardData);

    hazardData.hazardLevel = parseInt(hazardData.hazardLevel);
    const response = await fetch('http://localhost:3000/api/v1/hazards', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hazardData),
    });

    if (!response.ok) {
      return { postError: "Failed to post hazard. Please try again later." };
    }

    const data = await response.json();
    return { data };
  } catch (error) {
    console.log(error);

    return {
      error: "The server is currently unreachable. Please try again later.",
    };
  }
}
