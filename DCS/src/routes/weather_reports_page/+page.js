export async function load ({fetch}) {
    const response = await fetch('');
    const weather = await response.json();
    return {weather};
}
// USE TOMTOM FOR API'S, SWITCH CODE AROUND TO FIT TRAFFIC API, CREATE PAGE FOR TRAFFIC DATA, INCLUDING DROP DOWN MENU/ACCORDIANS