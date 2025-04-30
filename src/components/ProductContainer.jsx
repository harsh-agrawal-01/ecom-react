import React, { useContext, useEffect, useState } from 'react'
import MinCard from './MinCard'
import { ProductContext } from '../utils/Context'
import Loding from './Loding'
import { useLocation, useParams } from 'react-router-dom'
import axios from '../utils/axios'


const ProductContainer = () => {

  const [products] = useContext(ProductContext)
  const { search } = useLocation()
  const category = decodeURIComponent(search.split('=')[1]) 
  const [filteredData, setfilteredData] = useState(null)

  // const getproductcategory = async () => {
  //   try {

  //     const { data } = await axios.get(`/products/category/${category}`)
  //     setfilteredData(data)
      
  //   } catch (error) {
  //     console.log(error);
      
  //   }
  // }

  useEffect(() => {

    if(category != 'undefined'){
      // getproductcategory()
      setfilteredData(products.filter(p => p.category == category))
    }
    else{
      setfilteredData(products)
    }

  }, [category, products])

  return products ? (
    <>
      <div className='w-[85%] h-full overflow-x-hidden overflow-y-auto p-5 pt-10 whitespace-wrap'>

        {filteredData && filteredData.map((CurrPro, index) => {
          return <MinCard key={index} product={CurrPro} />;
        })}

      </div></>
  ) : (
    <Loding />
  )
}

export default ProductContainer
