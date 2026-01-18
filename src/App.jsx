import { useState } from 'react'
import "./App.css"
import LoginPage from "./components/pages/login/LoginPage";
import { Routes,Route } from 'react-router-dom';
import OrderPage from './components/pages/login/order/OrderPage';
import ErrorPage from './components/pages/login/error/ErrorPage'




function App() {
  

  return (
         <Routes>
           <Route path="/" element={<LoginPage/>}/>
           <Route path = "/order/:userName" element = {<OrderPage/>}/>
           <Route path = "*" element = {<ErrorPage/>}/>
          
         </Routes>
  )
  
  
}

export default App
