import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

  const { search, pathname } = useLocation();
  console.log(pathname,search);
  
  const [products] = useContext(ProductContext)

  let distinctCategory = products  && products.reduce((acc, cv) => [...acc , cv.category], []) 
  
  distinctCategory = [...new Set(distinctCategory)]
      
  return (
    <div className  = 'w-[15%] h-screen bg-neutral-50 flex flex-col items-center pt-5'>

        <Link className = "text-blue-400 border border-blue-200 px-5 py-1 cursor-pointer"
        to="/create">
          Add New Product
        </Link>
        {(pathname != '/' || search.length > 0) ? <Link to='/' className='w-[80%] text-xl mt-5'>Home <hr className='h-0.5 w-[30%] mt-1'/></Link> : null}
        
        <h1 className='my-4 w-[80%] text-xl'>Catagory Filter</h1>
            <div className='w-[80%]'>
                
            {distinctCategory.map((currCata, index) => {
              
             return <Link

             to={`/?catagory=${currCata}`}
              key={index}  
              className='flex items-center mb-3'>

              <span className='rounded-full mr-2 w-[10px] h-[10px] bg-blue-400 '></span>
              {" "}
              
              {currCata.charAt(0).toUpperCase() + currCata.slice(1)}
              
                
            </Link>
            })}

            </div>
      
    </div>
  )
}

export default Navbar
