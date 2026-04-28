import React from 'react'
import { useNavigate, useParams } from 'react-router'


export default function OrderPage() {
    const navigate = useNavigate();
    const {username} = useParams();
    const handleLogout = ()=>{
          navigate("/")
    }
  return (
    <div>
          <h1>Bonjour {username}</h1>
          <button onClick={handleLogout}>Déconnexion</button>
    </div>
  )
}
