export async function postLogin(userData) {
    try {
      console.log("Posting user with data:", alertData);
  
      const response = await fetch('', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(alertData),
      });
  
      const data = await response.json();

      if (!response.ok) {
        return { error: data.message };
      }
  
      return { data: data }; // Return the response data (e.g., the created alert)
    } catch (error) {
      //Console the error
      console.log(error);
      //Return the error if the API is offline
      return {
        error: "The server is currently unreachable. Please try again later.",
      };
    }
  }
  