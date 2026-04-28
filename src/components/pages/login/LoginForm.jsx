import React from 'react'
import { useState } from 'react';
import {useNavigate} from "react-router-dom"

export default function LoginForm() {
     // State (données)
            const [inputValue,setInputValue] = useState("");
             const navigate = useNavigate();
    // Comportement
            const handleSubmit=(event)=>{
               event.preventDefault()
               navigate(`/order/${inputValue}`)
               setInputValue("");
             
            }
            const handleChange =(event)=>{
                setInputValue(event.target.value) ;
            }
         
    // Render 
    
  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
             <h1>Bienvenue chez nous !</h1><br />
             <h2>Connectez-vous</h2>
             <input type="text" 
                    value={inputValue} 
                    required 
                    placeholder="Entrez votre prénom ..." 
                    onChange={handleChange}/>
            <button>Accédez à votre espace</button>
          </form>
    </div>
  )
}
