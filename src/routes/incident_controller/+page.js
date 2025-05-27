import url from "../../url/url";
export async function load() {
    try {
        // GET disasters
        //Fetch the data from the back-end API
        const response1 = await fetch(`${url}/api/v1/disasters`);

        //If the response has no data
        if (!response1.ok) {
            return { message: "No disasters available" };
        }

        //Fetch the data in json format
        const disasters = await response1.json();

        //Console the data
        console.log(disasters);

        // GET teams
        //Fetch the data from the back-end API
        const response2 = await fetch(`${url}/api/v1/teams`);

        //If the response has no data
        if (!response1.ok) {
            return { message: "No disasters available" };
        }

        //Fetch the data in json format
        const teams = await response2.json();

        //Console the data
        console.log(teams);
        //Return the data
        return {
            disasters: disasters.data,
            teams: teams.data
        };
    } catch (error) {
        //Console the error
        console.log('Error fetching data:', error);
        //Return the error if the API is offline
        return { error: 'The server is currently unreachable. Please try again later.' }
    }
}