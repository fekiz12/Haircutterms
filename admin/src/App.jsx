import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import {Route, Routes} from "react-router-dom"
import Add from "./pages/ADD/Add"
import Orders from './pages/ORDERS/Orders'
import List from  "./pages/LIST/List"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const url="https://haircutterms-api.vercel.app";
  return (
    <div>
    <ToastContainer/>
      <Navbar/>
      <hr></hr>
      <div className='app-content'>
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add url={url} />}  />
          <Route path='/list' element={<List url={url} />}  />
          <Route path='/orders' element={<Orders url={url} />}  />
        </Routes>
      </div>
    </div>
  )
}

export default App