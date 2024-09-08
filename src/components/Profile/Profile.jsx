import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPizzaSlice} from '@fortawesome/free-solid-svg-icons'
import Header from '../Header/Header'

const Profile = () => {
  return (
    <div className='vw-100 d-flex align-items-center p-3 flex-column'>
      <Header/>
      <div className='mt-5'>
        <h2 className='px-5'>Bienvenid@</h2><br/>
        <h4 className='p-1'>milla.react@gmail.com</h4><br/>

        <Link to='/' className="btn btn-outline-danger mx-5"><FontAwesomeIcon icon={faPizzaSlice} /> Cerrar sesion</Link>
        
      </div>

    </div>
  )
}

export default Profile
