import React, {useContext} from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPizzaSlice, faLock, faLockOpen, faKey, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export default function Navbar() {
  const {totalCLP}=useContext(CartContext)
  const token = false;

  return (
    <div>
      <nav className="navbar navbar-expand-lg pink-bg fixed-top">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item fw-bold">
                <Link to='/' className="btn btn-outline-light"><FontAwesomeIcon icon={faPizzaSlice} /> Home</Link>
              </li>
              {token===true? (<li className="nav-item">
              <Link to='/profile' className="btn btn-outline-light"><FontAwesomeIcon icon={faLockOpen} /> Profile</Link>
              </li>):null}
              {token===false? (<li className="nav-item">
                <Link to='/login' className="btn btn-outline-light"><FontAwesomeIcon icon={faKey} /> Login</Link>
              </li>): null }
               {token===false? (<li className="nav-item">
                <Link to='/register' className="btn btn-outline-light"><FontAwesomeIcon icon={faKey} /> Register</Link>
              </li>):null}
              <li className="nav-item">
               <Link to='/cart' className="btn btn-outline-light"><FontAwesomeIcon icon={faCartShopping} /> Total: {totalCLP}</Link>
              </li>
                {token===true? (<li className="nav-item">
                <Link to='' className="btn btn-outline-light"><FontAwesomeIcon icon={faLock} /> Logout</Link>
                </li>):null}
            </ul>
        </div>
       </div>
      </nav>
    </div>

  )
}
