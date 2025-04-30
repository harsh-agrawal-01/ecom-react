import axios from '../utils/axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loding from './Loding'
import { ProductContext } from '../utils/Context'

const Details = () => {
    const navigate = useNavigate()
    
    const [products, setproducts] = useContext(ProductContext)
    const [product, setproduct] = useState(null)
    const { id } = useParams();

    // const getSingleProduct = async () => {
    //     try {

    //         const { data } = await axios.get(`/products/${id}`)
    //         setproduct(data)

    //     } catch (error) {
    //         console.log(error);

    //     }
    // }

    useEffect(() => {
        if (!product && products && products.length > 0) {
            const selectedProduct = products.find((pro) => pro.id == id);
            setproduct(selectedProduct);
        }
    }, [product, id, products]);

    const ProductDeleteHandler = (id) => {
        const filterProduct = products.filter(p => p.id != id)
        setproducts(filterProduct)

        localStorage.setItem("products" , JSON.stringify(products))
        navigate('/')
    }



    return product ? (
        <><Link to='/' className='text-xl absolute left-[12%] top-[5%] active:bg-white w-fit px-3 py-1 active:shadow rounded-lg'>Home</Link>
            <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6 w-full">
                <div className="w-[80%] h-[85%] bg-white rounded-lg shadow-lg p-6 flex flex-row items-center justify-between">
                    <img
                        className="w-[40%] h-[500px] object-contain rounded-md"
                        src={product.image}
                        alt="Product"
                    />
                    <div className="ml-6 flex flex-col w-[60%]">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {product.title}
                        </h2>
                        <p className="text-gray-600 mt-2 h-11 overflow-y-hidden">
                            {product.description}
                        </p>
                        <p className="text-lg font-semibold text-gray-900 mt-4">${product.price}</p>
                        <p className="text-sm text-gray-500 mt-2">{product.category}</p>
                        {product.rating ? (
                            <div className="flex items-center mt-4">
                                <span className="text-yellow-500 text-lg font-bold">&#9733; {product.rating.rate}</span>
                                <span className="ml-2 text-gray-600">({product.rating.count})</span>
                            </div>
                        ) : (
                            <p className=" text-gray-400 italic"></p>
                        )}
                        <div className='flex gap-5 mt-6'>
                            <Link to={`/edit/${id}`} className="w-1/5 bg-blue-600 text-center text-white py-2 rounded-md hover:bg-blue-700">
                                Edit
                            </Link>
                            <button onClick={() => ProductDeleteHandler(product.id)} className="w-1/5 bg-red-500 text-center text-white py-2 rounded-md hover:bg-red-600">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div></>

    ) : (<Loding />)
}

export default Details
