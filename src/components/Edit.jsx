import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../utils/Context'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
        const navigate = useNavigate()
        const { id } = useParams()
        const [products ,setproducts ]=useContext(ProductContext)
        const [product, setproduct] = useState({
            title : "",
            image :"",
            category : "",
            price : "",
            description : ""
        })

        const ChangeHandler = (e) => {
            setproduct({...product, [e.target.name] : e.target.value})
        }
    
        const EditProductHandler = (e) => {
            e.preventDefault()
    
            if (
                product.title.trim().length < 2 ||
                product.image.trim().length < 2 ||
                product.category.trim().length < 2 ||
                Number(product.price) <= 0 ||
                product.description.trim().length < 2
            ) {
                alert("Each field must have at least 2 characters, and price must be greater than 0");
                return;
            }

            const pi = products.findIndex((p) => p.id == id)

            const copyData = [...products]
            copyData[pi] = {...products[pi], ...product}
    
            setproducts(copyData)
    
            localStorage.setItem("products", JSON.stringify(copyData))
            
            navigate(-1)
    
        }

        useEffect(() => {
            const found = products.find((p) => p.id == id)
            if (found) {
              setproduct(found)
            }
          }, [id, products])
          
  return (
    <><Link to='/' className='text-xl absolute left-[16%] top-[5%] active:bg-white w-fit px-3 py-1 rounded-lg'>Home</Link>
                <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6 w-full">
                    <div className="w-[70%] bg-white rounded-lg shadow-lg py-6 px-8">
                        <h1 className='text-2xl font-medium mb-4'>Edit Product</h1>
                        <form onSubmit={(e) => EditProductHandler(e)}>
    
                            <input
                                name='image'
                                value={product && product.image}
    
                                onChange={(e) => {
                                    ChangeHandler(e)
                                    
                                }}
                                className='w-[99%] bg-gray-100 text-lg px-3 py-2 rounded-lg mb-3'
                                type="text"
                                placeholder='Image Link'
                                 />
    
                            <input
                                name='title'
                                value={product && product.title}
    
                                onChange={(e) => {
                                    ChangeHandler(e)
                                    
                                }}
                                className='w-[99%] bg-gray-100 text-lg px-3 py-2 rounded-lg mb-3'
                                type="text"
                                placeholder='Title'
                                 />
    
                            <input
                                name='category'
                                value={product && product.category}
    
                                onChange={(e) => {
                                    ChangeHandler(e)
                                
                                }}
                                className='w-[49%] bg-gray-100 text-lg px-3 py-2 rounded-lg mb-3'
                                type="text"
                                placeholder='Category'
                                 />
    
                            <input
                                name='price'
                                value={product && product.price}
    
                                onChange={(e) => {
                                    ChangeHandler(e)
                                    
                                }}
                                className='w-[49%] bg-gray-100 text-lg px-3 py-2 rounded-lg mb-3 ml-3'
                                type="number"
                                placeholder='Price'
                                 />
    
                            <textarea
                            
                                value={product && product.description}
                                
    
                                onChange={(e) => {
                                   ChangeHandler(e)
                                }}
                                name="description" id="" placeholder='Enter product description here...' className='w-[99%] bg-gray-100 text-lg px-3 py-2 rounded-lg row-10 mb-5 h-60' ></textarea>
    
                            <div className='w-1/2'>
                                <button className='py-2 px-5 text-blue-400 border border-blue-200 hover:text-blue-800 hover:border-blue-500'>Edit Product</button>
                            </div>
    
                        </form>
    
    
                    </div>
                </div></>
  )
}

export default Edit