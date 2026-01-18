import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function OrderPage() {
    const {userName} = useParams()
  return (
    <div>
      <h1>Bienvenue {userName}</h1>
      <Link to ="/"><button>Déconnexion</button></Link>
    </div>
  )
}
