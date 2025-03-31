export async function load() {
    try {
        //Fetch the data from the back-end API
        const response = await fetch('http://localhost:3000/api/v1/hazards');
        
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
    } catch (error) {
        //Console the error
        console.log('Error fetching data:', error);
        //Return the error if the API is offline
        return {error: 'The server is currently unreachable. Please try again later.'}
    }
}