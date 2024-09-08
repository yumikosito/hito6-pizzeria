import React, {useContext,useState,useEffect} from 'react'
import { CartContext } from '../../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMinus} from '@fortawesome/free-solid-svg-icons'

const Disminuye = (pizza) => {
  const {cart, setCart}=useContext(CartContext)
  const [count,setCount]=useState(pizza.cantidad)
  console.log("fuera"+ pizza.cantidad);
  console.log("fuera"+count);

  function ModificacionCant(id){
    console.log("contador=>"+ count);
    setCount(count-1)
    console.log("dentro"+pizza.cantidad);
    console.log("dentro"+count);
    

    const newAdd=cart.map(item =>{

      if(item.id===id){
        return {...item, cantidad:count}
      }
      return item
    })
    setCart(newAdd)
  }

  useEffect (()=>{
    ModificacionCant()
  },[])

  return (
    <div>
      <button className="btn btn-link px-2" onClick={()=>ModificacionCant(pizza.id)}> <FontAwesomeIcon icon={faMinus} />
      </button>
    </div>
  )
}

export default Disminuye
