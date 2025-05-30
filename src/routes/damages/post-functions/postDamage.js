import url from "../../../url/url";
export async function postDamage(damageData) {
  try {
    console.log("Posting damage with data:", damageData);

    damageData.damageLevel = parseInt(damageData.damageLevel);
    damageData.countAffected = parseInt(damageData.countAffected);
    const response = await fetch(`${url}/api/v1/damages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(damageData),
    });

    if (!response.ok) {
      return { postError: "Failed to post damage. Please try again later." };
    }

    const info = await response.json();
    return { info }; // Return the response data
  } catch (error) {
    //Console the error
    console.log(error);
    //Return the error if the API is offline
    return {
      error: "The server is currently unreachable. Please try again later.",
    };
  }
}
