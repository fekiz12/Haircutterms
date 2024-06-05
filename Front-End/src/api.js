
const API_URL = 'https://haircutterms-api.vercel.app';

export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/endpoint`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
