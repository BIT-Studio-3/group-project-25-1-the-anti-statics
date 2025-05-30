import url from "../url/url";
export async function load() {
    try {
        //Fetch the data from the back-end API
        const response = await fetch(`${url}/api/v1/alerts`);
        
        //If the response has no data
        if(!response.ok){
            return {message: "No alerts available"};
        }
        
        //Fetch the data in json format
        const alerts = await response.json();
        
        //Console the data
        console.log(alerts);
        
        //Return the data
        return {alerts: alerts.data};
    } catch (error) {
        //Console the error
        console.log('Error fetching data:', error);
        //Return the error if the API is offline
        return {error: 'The server is currently unreachable. Please try again later.'}
    }
}