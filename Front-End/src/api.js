import axios from 'axios';

// Backend API'nin URL'si
const backendURL = 'https://haircutterms-api.vercel.app';

// Örnek bir GET isteği
axios.get(`${backendURL}/example-endpoint`)
  .then(response => {
    // İstek başarılı olduysa burada işlem yapabilirsiniz
    console.log(response.data);
  })
  .catch(error => {
    // Hata durumunda burada işlem yapabilirsiniz
    console.error('Error fetching data:', error);
  });
