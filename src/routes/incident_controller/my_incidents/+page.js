import url from "/src/url/url";
export async function load() {
    try {
        //Fetch the data from the back-end API
        const response = await fetch(`${url}/api/v1/disasters`);

        const disastersRes = response.ok ? await response.json() : { data: [] };

        const disasters = disastersRes.data || [];

        //Console the data
        console.log(disasters);

        //Return the data
        return { disasters };
    } catch (error) {
        //Console the error
        console.log('Error fetching data:', error);
        //Return the error if the API is offline
        return { error: 'The server is currently unreachable. Please try again later.' }
    }
}