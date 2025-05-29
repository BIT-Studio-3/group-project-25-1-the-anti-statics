import url from "../../url/url";

export async function load() {
    try {
        // Fetch active disasters
        const response1 = await fetch(`${url}/api/v1/disasters?status=ACTIVE`);
        const activeDisastersJson = response1.ok ? await response1.json() : { data: [] };

        // Fetch teams
        const response2 = await fetch(`${url}/api/v1/teams`);
        const teamsJson = response2.ok ? await response2.json() : { data: [] };

        // Fetch disasters
        const response3 = await fetch(`${url}/api/v1/disasters`);
        const disastersJson = response3.ok ? await response3.json() : { data: [] };

        // Fetch disasters by fire
        const response4 = await fetch(`${url}/api/v1/disasters?type=FIRE`);
        const fires = response4.ok ? await response4.json() : { data: [] };

        return {
            disasters: disastersJson.data,
            activeDisasters: activeDisastersJson.data,
            teams: teamsJson.data,
            fires: fires.data
        };

    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            disasters: [],
            activeDisasters: [],
            teams: [],
            error: 'The server is currently unreachable. Please try again later.'
        };
    }
}
