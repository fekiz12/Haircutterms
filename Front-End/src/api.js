// api.js

// Backend URL'sini doğru şekilde belirtin
const API_URL = 'https://haircutterms-api.vercel.app';

// Veri almak için fetchData fonksiyonunu tanımlayın
export const fetchData = async () => {
  try {
    // Backend'den veri almak için fetch kullanın
    const response = await fetch(`${API_URL}/api/user/register`);
    
    // HTTP yanıtını kontrol edin
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    
    // JSON formatındaki yanıtı alın
    const data = await response.json();
    
    // Veriyi döndürün
    return data;
  } catch (error) {
    // Hata durumunda konsola hata mesajını yazdırın
    console.error('Error fetching data:', error);
    
    // Hata durumunda null döndürün
    return null;
  }
};

