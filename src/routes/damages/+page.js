import url from "../../url/url";
export async function load() {
    try {
        //Fetch the data from the back-end API

        const response = await fetch(`${url}/api/v1/damages`);

        //If the response has no data
        if(!response.ok){
            return {message: "No damages available"};
        }
        
        //Fetch the data in json format
        const damages = await response.json();
        
        //Console the data
        console.log(damages);
        
        //Return the data
        return {damages: damages.data};
    } catch (error) {
        //Console the error
        console.log('Error fetching data:', error);
        //Return the error if the API is offline
        return {error: 'The server is currently unreachable. Please try again later.'}
    }
}