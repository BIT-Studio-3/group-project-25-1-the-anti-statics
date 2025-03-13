export async function load() {
    try {
        const response = await fetch('http://localhost:3000/api/v1/alerts');

        if(!response.ok){
            throw new Error('Failed to fetch data');
        }

        const alerts = await response.json();

        return {alerts};
    } catch (error) {
        
        console.log('Error fetching data:', error);

        return {error: 'The server is currently unreachable. Please try again later.'}
    }
}