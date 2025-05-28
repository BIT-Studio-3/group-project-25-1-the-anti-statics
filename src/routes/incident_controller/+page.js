import url from "../../url/url";

export async function load() {
    try {
        // Fetch disasters
        const response1 = await fetch(`${url}/api/v1/disasters`);
        const disastersJson = response1.ok ? await response1.json() : { data: [] };

        // Fetch teams
        const response2 = await fetch(`${url}/api/v1/teams`);
        const teamsJson = response2.ok ? await response2.json() : { data: [] };

        console.log(disastersJson, teamsJson);

        return {
            disasters: disastersJson.data,
            teams: teamsJson.data
        };

    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            disasters: [],
            teams: [],
            error: 'The server is currently unreachable. Please try again later.'
        };
    }
}
