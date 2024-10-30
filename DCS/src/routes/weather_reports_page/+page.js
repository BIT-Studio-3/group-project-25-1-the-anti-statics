export async function load ({fetch}) {
    const response = await fetch('https://alerts.metservice.com/cap/rss');
    const weather = await response.json();
    return {weather};
}