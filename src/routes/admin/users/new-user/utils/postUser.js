import url from "../../../../../url/url";
export async function postUser(userData) {
  try {
    console.log("Posting user with data:", userData);

    const response = await fetch(`${url}/api/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
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
