export async function load({fetch}) {
    const response = await fetch(`https://api.geonet.org.nz/volcano/val`);
    const volcanos = await response.json();
    return {volcanos};
}