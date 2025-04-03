export async function postResource(resourceData) {
    try {
      console.log("Posting resource with data:", resourceData);
  
      const response = await fetch("http://localhost:3000/api/v1/ResourcesAvailability", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resourceData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        return { error: data.message };
      }
  
      return { data: data };
  
    } catch (error) {
      console.error("Error posting resource:", error);
      return {
        error: "The server is currently unreachable. Please try again later.",
      };
    }
  }
  