import url from "../../url/url";
const DisasterTypes = [
    "FLOOD",
    "EARTHQUAKE",
    "FIRE",
    "CYCLONE",
    "TSUNAMI",
    "LANDSLIDE",
    "VOLCANIC",
    "OTHER"
];

export async function load() {
    try {
        // Fetch teams and all disasters in parallel
        const [teamsRes, disastersRes, resourcesRes ] = await Promise.all([
            fetch(`${url}/api/v1/teams`),
            fetch(`${url}/api/v1/disasters`),
            fetch(`${url}/api/v1/ResourcesAvailability`)
        ]);

        // Teams
        const teamsJson = teamsRes.ok ? await teamsRes.json() : { data: [] };

        const teams = teamsJson.data || [];

        // Resources
        const resourcesJson = resourcesRes.ok ? await resourcesRes.json() : { data: [] };

        const resources = resourcesJson.data || [];
        
        // Disasters
        const disastersJson = disastersRes.ok ? await disastersRes.json() : { data: [] };

        const disasters = disastersJson.data || [];

        // Filter disaster by active status
        const activeDisasters = disasters.filter(d => d.status === "ACTIVE");

        // Dynamically filter disasters by type
        const disastersByType = {};
        for (const type of DisasterTypes) {
            disastersByType[`${type.toLowerCase()}s`] = disasters.filter(d => d.type === type);
        }

        return {
            disasters,
            activeDisasters,
            teams,
            resources,
            ...disastersByType
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
