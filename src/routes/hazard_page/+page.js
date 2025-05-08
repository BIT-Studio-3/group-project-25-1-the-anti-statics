import url from "../../url/url";
export async function load() {
    try {
        //Fetch the data from the back-end API
        const response = await fetch(`${url}/api/v1/hazards`);
        
        //If the response has no data
        if(!response.ok){
            return {message: "No hazards available"};
        }
        
        //Fetch the data in json format
        const hazards = await response.json();
        
        //Console the data
        console.log(hazards);
        
        //Return the data
        return {hazards: hazards.data};
    } catch (serverError) {
        //Console the error
        console.log('Error fetching data:', serverError);
        //Return the error if the API is offline
        return {serverError: 'The server is currently unreachable. Please try again later.'}
    }
}