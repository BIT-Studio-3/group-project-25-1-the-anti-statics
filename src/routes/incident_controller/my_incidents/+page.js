import url from "/src/url/url";
export async function load() {
    try {
        //Fetch the data from the back-end API
        const response = await fetch(`${url}/api/v1/disasters`);

        if (!response.ok) {
            const errorData = await response.json();
            return { getError: errorData.message };
        }

        //Fetch the data in json format
        const disasters = await response.json();

        //Console the data
        console.log(disasters);

        //Return the data
        return { disasters: disasters.data };
    } catch (error) {
        //Console the error
        console.log('Error fetching data:', error);
        //Return the error if the API is offline
        return { error: 'The server is currently unreachable. Please try again later.' }
    }
}