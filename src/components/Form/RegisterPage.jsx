import React from 'react'
import { useState } from 'react'
import Header from '../Header/Header'

const RegisterPage = (base) => {
  const [email, setEmail] = useState("")
  const [password, setPasword] = useState("")
  const [passConfirm, setPassConfirm] = useState("")

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPasword(event.target.value)
  }

  const handlePassConfirmChange = (event) => {
    setPassConfirm(event.target.value)
  }
  
  const handleSubmit = (e)=> {
    e.preventDefault()
    if (password===passConfirm && password.length>=6){
      alert("Enviado con exito")
      base.BD.push({email:email, password:password})  
      
    } else if (password.length<6) {
      alert("Contrasena tiene que tener 6 caracteres minimo")
    } else{
      alert("Contrasenas no son iguales")
    }
  }
  

  return (
    <div className='vw-100 d-flex align-items-center p-3 flex-column'>
      <Header/>
      <div className='mt-3'>
        <h3>Registro</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label> <br/>
          <input type="text" id='email' name='email' value={email} required onChange={handleEmailChange}/>
          <br/>
          <label htmlFor="password">Contrasena</label><br/>
          <input type="text" id='password' name='password' value={password} required onChange={handlePasswordChange}/>
          <br/>
          <label htmlFor="passConfirm" >Confirmacion Contrasena</label><br/>
          <input type="text" id='passConfirm' name='passConfirm' value={passConfirm} required onChange={handlePassConfirmChange}/>
          <br/>
          <button type='submit' className="btn btn-info"> Enviar </button>
        </form>
      </div>

    </div>
  )
}

export default RegisterPage
