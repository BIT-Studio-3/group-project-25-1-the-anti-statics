import url from "../../../url/url";
export async function postTeam(teamInfo) {
  try {
    console.log("Posting team with info:", teamInfo);

    const response = await fetch(`${url}/api/v1/teams`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teamInfo),
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
