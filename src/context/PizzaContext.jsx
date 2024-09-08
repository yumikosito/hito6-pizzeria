import {createContext,useEffect,useState} from 'react'

const PizzaContext= createContext()

const PizzaProvider = ({children}) => {
  const [pizza,setPizza]=useState([])

  const getData = async () =>{
    const res= await fetch ("http://localhost:5000/api/pizzas")
    let data= await res.json()
    setPizza (data)
  }

  useEffect (()=>{
    getData()
  },[])
  

  return <PizzaContext.Provider value={{pizza, setPizza}}>
    {children}
  </PizzaContext.Provider>
}

export {PizzaProvider, PizzaContext} 