export async function load() {
    try {
        const response = await fetch('http://localhost:3000/api/v1/alerts');

        const alerts = await response.json();

        return {alerts};
    } catch (error) {

        console.log('Error fetching data:', error);

        return {error: 'The server is currently unreachable. Please try again later.'}
    }
}