import React from 'react'
import { useState } from 'react'
import Header from '../Header/Header'
const LoginPage = (base) => {
  ;
  const [email, setEmail] = useState("")
  const [password, setPasword] = useState("")

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPasword(event.target.value)
  }
  
  
  const handleSubmit = (e)=> {
    e.preventDefault()
    const search=base.BD.find (mail => mail.email===email)
    console.log(search.password);
    
    if (password===search.password && password.length>=6){
      alert("Autentificacion correcta")
  
      
    } else if (password.length<6) {
      alert("Contrasena tiene que tener 6 caracteres minimo")
    } else{
      alert("Contrasena no coincide")
    }
  }



  return (
    <div className='vw-100 d-flex align-items-center p-3 flex-column'>
      <Header/>
      <div className='mt-5'>
        <h3>Inicio Sesion</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label> <br/>
          <input type="text" id='email' name='email' value={email} required onChange={handleEmailChange}/>
          <br/>
          <label htmlFor="password">Contrasena</label><br/>
          <input type="text" id='password' name='password' value={password} required onChange={handlePasswordChange}/>
          <br/>
          <button type='submit' className="btn btn-info"> Enviar </button>
        </form>
      </div>

    </div>
  )
}

export default LoginPage
