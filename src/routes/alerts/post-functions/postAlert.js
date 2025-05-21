import url from "../../../url/url";
export async function postAlert(alertData) {
  try {
    console.log("Posting alert with data:", alertData);

    alertData.alertLevel = parseInt(alertData.alertLevel);
    const response = await fetch(`${url}/api/v1/alerts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(alertData),
    });

    const data = await response.json();

    //Return the validation message
    if (!response.ok) { 
      return { error: data.message };
    }

    return { data: data }; // Return the data

  } catch (error) {
    //Console the error
    console.log(error);
    //Return the error if the API is offline
    return {
      error: "The server is currently unreachable. Please try again later.",
    };
  }
}
