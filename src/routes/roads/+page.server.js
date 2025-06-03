import { XMLParser } from 'fast-xml-parser';

export async function load({ fetch }) {
  try {
    const response = await fetch('https://trafficnz.info/service/traffic/rest/4/cameras/all');

    if (!response.ok) {
      return { message: "No cameras available" }
    }
  
    const xmlText = await response.text(); // Get XML as text

    // Create an XMLParser instance
    const parser = new XMLParser();

    // Parse the XML into a JSON-like object
    const data = parser.parse(xmlText);

    // Base URL for constructing image URLs
    const baseUrl = "https://trafficnz.info";

    // Map cameras into a new array
    let cameras = data.response.camera.map((camera) => ({
      id: camera.id,
      name: camera.name,
      description: camera.description,
      direction: camera.direction,
      highway: camera.highway,
      latitude: camera.latitude,
      longitude: camera.longitude,
      imageUrl: `${baseUrl}${camera.imageUrl}`,
      thumbUrl: `${baseUrl}${camera.thumbUrl}`,
      regionid: camera.region.id,
      region: camera.region.name,
    }));

    //Filter for Otago Cameras
    let otagoCameras = cameras.filter(camera => camera.region === 'Otago');

    return { cameras: otagoCameras }
  } catch (error) {
    console.error('Error fetching data:', error);
    return { error: 'The server is currently unreachable.' }
  }
}