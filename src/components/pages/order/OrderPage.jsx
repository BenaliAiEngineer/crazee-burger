import React from 'react'
import { useNavigate, useParams } from 'react-router'


export default function OrderPage() {
    const navigate = useNavigate();
    const {id} = useParams();
    const handleLogout = ()=>{
          navigate("/")
    }
  return (
    <div>
          <h1>Bonjour {id}</h1>
          <button onClick={handleLogout}>Déconnexion</button>
    </div>
  )
}
