import url from "../../../url/url";
export async function postDisaster(incidentInfo) {
  try {
    console.log("Posting disaster with info:", incidentInfo);

    // Transform the date fields into date objects
    const { startTime, endTime, ...rest } = incidentInfo;

    incidentInfo = {
      ...rest,
      startTime: new Date(startTime).toISOString(),
      endTime: new Date(endTime).toISOString()
    }

    const response = await fetch(`${url}/api/v1/disasters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(incidentInfo),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { postError: errorData.message };
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
