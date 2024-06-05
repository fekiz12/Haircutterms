
import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ContactUs from './Pages/ContactUs/ContactUs';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import LoginPopup from './Components/LoginPopup/LoginPopup';
import Footer from './Components/Footer/Footer';
import Hizmetler from './Pages/Hizmetler/Hizmetler';
import Book from './Pages/Book/Book';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Galery from './Pages/Galery/Galery';
import Personel from './Pages/Personel/Personel';
import Verify from './Pages/Verify/Verify';
import MyOrders from './Pages/MyOrders/MyOrders';
import axios from 'axios';
const API_URL = 'https://haircutterms-api.vercel.app'; 

const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/api/data`, {
      method: 'GET',
      credentials: 'include'
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};



const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };

    getData();
  }, []);


  
  

  const [showLogin,setShowLogin] = useState(false)
  
  return (
    
<>
<div>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}

    <div className="App">
    <Navbar setShowLogin={setShowLogin}/>
    
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='/shop' element={<Shop></Shop>}> </Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/galery' element={<Galery></Galery>}></Route>
        <Route path='/services' element={<Hizmetler></Hizmetler>}></Route>
        <Route path='/book' element={<Book></Book>}></Route>
        <Route path='/placeorder' element={<PlaceOrder></PlaceOrder>}></Route>
        <Route path='/verify' element={<Verify></Verify>}></Route>
        <Route path='/personel' element={<Personel></Personel>}></Route>
        <Route path='/myorders' element={<MyOrders></MyOrders>}></Route>
    </Routes>    

    
    
    
    
    
    <Footer></Footer>
    </div>
    </>
  );
}

export default App;
