import React from 'react'
import { useNavigate } from 'react-router'

export default function ErrorPage() {
    const navigate = useNavigate();

    const handleLogout =()=>{
        navigate("/")
    }
  return (
    <div>
       <h1>ErrorPage</h1>
       <button onClick={handleLogout}>Retourner à la page d'accueil</button>
    </div>
  )
}
