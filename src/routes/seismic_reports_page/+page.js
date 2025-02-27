export async function load({fetch}) {
    const response = await fetch(`https://api.geonet.org.nz/quake?MMI=5`);
    const quakes = await response.json();
    const response2 = await fetch(`https://api.geonet.org.nz/quake?MMI=6`);
    const quakes2 = await response2.json();
    const response3 = await fetch(`https://api.geonet.org.nz/quake?MMI=7`);
    const quakes3 = await response3.json();
    const response4 = await fetch(`https://api.geonet.org.nz/quake?MMI=7`);
    const quakes4 = await response4.json();
    return {quakes, quakes2, quakes3, quakes4};
}

