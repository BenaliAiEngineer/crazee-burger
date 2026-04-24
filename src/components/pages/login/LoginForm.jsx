import React from 'react'
import { useState } from 'react';

export default function LoginForm() {
     // State (données)
            const [inputValue,setInputValue] = useState("");
    // Comportement
            const handleSubmit=(event)=>{
               event.preventDefault()
               alert(`Bonjour ${inputValue} !`);
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
