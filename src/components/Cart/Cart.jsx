import React, {useEffect, useState,useContext} from 'react'
import PizzaTotal from '../Cards/PizzaTotal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
  const {cart,setCart,totalCLP}=useContext(CartContext)


  // function modificacion(pizza, nada, count){
  //   let coincidencia=cart.findIndex(item=> item.id===pizza.id)
  //   let newPizza= {id:pizza.id,desc:pizza.desc, cantidad:1, ingredients:pizza.ingredients, img:pizza.img, price: pizza.price}

  //   if(coincidencia>=0 ){
  //     setCart(cart.map(t => {
  //       if (t.id === pizza.id) {
  //         return {id:pizza.id, desc:pizza.desc, cantidad:count, ingredients:pizza.ingredients, img:pizza.img, price: pizza.price};
  //       } else {
  //         return t;
  //       }
  //     }))

  //     if (count===0){
  //       cart.splice(coincidencia,1)
  //       return
  //     }

  //   } else{
  //     setCart([...cart,newPizza])
  //   }
  // modificacionAct={modificacion}
  // }

  const cartTrue= cart.filter(item=>(item.add===true))


  return (
    <div className='vw-100 py-5'>
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-10">

            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0">Carrito de compra</h3>
              <div>
                <p className="mb-0"><span className="text-muted">Ordenar por:</span> <a href="#!" className="text-body">Precio <FontAwesomeIcon icon={faAngleDown} /></a></p>
              </div>
            </div>
            {cart && cartTrue.map(item=>(
              <PizzaTotal key={item.id} name={item.name} price={item.price} ingredients={item.ingredients} img={item.img}  id={item.id} cantidad={item.cantidad}/>
            ))}
            <div className="card w-100 mb-4">
              <div className="card-body p-3 d-flex flex-row">
                <div data-mdb-input-init className="form-outline flex-fill">
                  <input type="text" id="form1" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="form1">Codigo de descuento</label>
                </div>
                <button  type="button" className="btn btn-outline-warning btn-md ms-1">Anadir</button>
              </div>
            </div>

            <div className="card w-100">
              <div className="card-body">
                <div className="float-end">
                  <p className="mb-0 me-5 d-flex align-items-center">
                    <span className="medium text-muted me-2">Total compra:</span> <span className="lead fw-normal">{totalCLP}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="">
                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-block btn-lg">Proceder al pago</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
