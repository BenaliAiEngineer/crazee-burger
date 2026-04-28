import { useState } from "react"
import LoginPage from "./components/pages/login/LoginPage"
import OrderPage from "./components/pages/login/order/OrderPage"
import ErrorPage from "./components/pages/login/error/ErrorPage"
import {Routes ,Route} from "react-router-dom"
function App() {
   

  return (
          <Routes>
            <Route path="/" element ={<LoginPage/>}/>
            <Route path = "/order/:id" element ={<OrderPage/>}/>
            <Route path ="*" element = {<ErrorPage/>}/>
          </Routes>
           
  )
}

export default App
