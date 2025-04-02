export async function postDamage(damageData) {
    try {
      console.log("Posting damage with data:", damageData);
  
      damageData.damageLevel = parseInt(damageData.damageLevel);
      damageData.countAffected = parseInt(damageData.countAffected);
       // const response = await fetch('https://group-project-25-1-the-anti-statics-api.onrender.com/api/v1/damages');
      const response = await fetch('http://localhost:3000/api/v1/damages', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(damageData),
      });
  
      if (!response.ok) {
        return { postError: "Failed to post damage. Please try again later." };
      }
  
      const data = await response.json();
      return { data }; // Return the response data
    } catch (error) {
      //Console the error
      console.log(error);
      //Return the error if the API is offline
      return {
        error: "The server is currently unreachable. Please try again later.",
      };
    }
  }
  