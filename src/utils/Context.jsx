import axios from './axios'
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext()

const Context = (props) => {

    const [Products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || null)

    // const getProduct = async () => {
    //     try {
    //         const {data} = await axios('/products')
    //         setProducts(data)
            
    //     } catch (error) {
    //         console.log(error);
            
    //     }
    // }
    
    // useEffect(() => {
    //     getProduct()
    // },[])
  return (
    <ProductContext.Provider value={[Products, setProducts] }>
        {props.children}
    </ProductContext.Provider>
  )
}

export default Context
