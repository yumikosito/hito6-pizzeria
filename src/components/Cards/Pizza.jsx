import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPizzaSlice,faCartShopping} from '@fortawesome/free-solid-svg-icons'
import '../../index.css'

const Pizza = () => {
  const [pizza,setPizza]=useState([])
  const getData= async() =>{
      let res= await fetch ("http://localhost:5000/api/pizzas/p001")
      let data= await res.json()
      setPizza(data) 
  }
  const precioFormat= new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(pizza.price)
  useEffect (()=>{
    getData()
  },[])
 
  
  return (
    <div className='vw-100 pt-5'>
      <div className="card">
          <img src={pizza.img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <div className='d-flex flex-row'>
            <FontAwesomeIcon icon={faPizzaSlice} />
            <h5 className="card-title p-1">{pizza.name}</h5>
            </div>
            <p className="card-text">Descripcion: {pizza.desc}</p>

            <p className="card-text">Ingredientes:</p>
              <ul >
                {pizza.ingredients ? pizza?.ingredients.map((ingredient, index) => ( <li key={index}>{ingredient}</li>)) : null}
              </ul>
            
            <p className="card-text">Precio: {precioFormat}</p>

            <a href="#" className="btn btn-primary">Agregar <FontAwesomeIcon icon={faCartShopping} /> </a>
        </div>
    </div>
    </div>
  )
}

export default Pizza;
