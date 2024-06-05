const API_URL = 'https://haircutterms-api.vercel.app';

async function fetchData() {
  try {
    const response = await fetch(`${API_URL}/api/data`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
