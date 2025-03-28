import user from '../../../stores/user.js';

export async function postLogin(userData) {
    try {
      console.log("Posting user with data:", userData);
  
      const response = await fetch('', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      const data = await response.json();

      if (!response.ok) { //When user data is invalid
        return { error: data.message };
      }
  
      if (data){ //Update the user using the data
        user.update(val => val = {...data});
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
  