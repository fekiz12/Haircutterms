import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import ContactUs from './Pages/ContactUs/ContactUs';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import LoginPopup from './Components/LoginPopup/LoginPopup';
import Footer from './Components/Footer/Footer';
import Hizmetler from './Pages/Hizmetler/Hizmetler';
import Book from './Pages/Book/Book';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Galery from './Pages/Galery/Galery';
import Personel from './Pages/Personel/Personel';
import Verify from './Pages/Verify/Verify';
import MyOrders from './Pages/MyOrders/MyOrders';
import axios from 'axios';

const API_URL = 'https://haircutterms-api.vercel.app';

const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/data`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const App = () => {
  const [data, setData] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };
    getData();
  }, []);

  return (
    <>
      <div>
        <h1>Data from API</h1>
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      <div className="App">
        <Navbar setShowLogin={setShowLogin} />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/galery" element={<Galery />} />
            <Route path="/services" element={<Hizmetler />} />
            <Route path="/book" element={<Book />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/personel" element={<Personel />} />
            <Route path="/myorders" element={<MyOrders />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
};

export default App;
