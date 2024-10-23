export async function load({fetch}) {
    const response = await fetch(`https://api.geonet.org.nz/quake?MMI=5`);
    const quakes = await response.json();
    const response2 = await fetch(`https://api.geonet.org.nz/quake?MMI=6`);
    const quakes2 = await response2.json();
    return {quakes, quakes2};
}