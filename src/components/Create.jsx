import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'

const Create = () => {
    const navigate = useNavigate()
    const [products ,setproducts ]=useContext(ProductContext)
    const [image, setimage] = useState('')
    const [title, settitle] = useState('')
    const [category, setcategory] = useState('')
    const [price, setprice] = useState("")
    const [description, setdescription] = useState('')

    const AddProductHandler = (e) => {
        e.preventDefault()

        if (
            title.trim().length < 2 ||
            image.trim().length < 2 ||
            category.trim().length < 2 ||
            price.trim().length < 1 ||
            description.trim().length < 2
          ) {
            alert("Each field must have at least 4 characters");
            return;
          }
        const product = {
            id:nanoid(), title, image, category, price, description
        }

        
        
        setproducts([...products,product])
        console.log(products);
        

        setimage('')
        settitle('')
        setcategory('')
        setprice('')
        setdescription('')

        localStorage.setItem("products", JSON.stringify([...products,product]))
        toast.success("Product Added Sussesfully")
        navigate('/')

    }
    

    return (
        <><Link to='/' className='text-xl absolute left-[16%] top-[5%] active:bg-white w-fit px-3 py-1 rounded-lg'>Home</Link>
            <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6 w-full">
                <div className="w-[70%] bg-white rounded-lg shadow-lg py-6 px-8">
                    <h1 className='text-2xl font-medium mb-4'>Add New Product</h1>
                    <form onSubmit={(e) => AddProductHandler(e)}>

                        <input
                            value={image}

                            onChange={(e) => {
                                setimage(e.target.value)
                            }}
                            className='w-[99%] bg-gray-100 text-lg px-3 py-2 rounded-lg mb-3'
                            type="text"
                            placeholder='Image Link'
                             />

                        <input
                            value={title}

                            onChange={(e) => {
                                settitle(e.target.value)
                            }}
                            className='w-[99%] bg-gray-100 text-lg px-3 py-2 rounded-lg mb-3'
                            type="text"
                            placeholder='Title'
                             />

                        <input
                            value={category}

                            onChange={(e) => {
                                setcategory(e.target.value)
                            }}
                            className='w-[49%] bg-gray-100 text-lg px-3 py-2 rounded-lg mb-3'
                            type="text"
                            placeholder='Category'
                             />

                        <input
                            value={price}

                            onChange={(e) => {
                                setprice(e.target.value)
                            }}
                            className='w-[49%] bg-gray-100 text-lg px-3 py-2 rounded-lg mb-3 ml-3'
                            type="number"
                            placeholder='Price'
                             />

                        <textarea
                            value={description}
                            

                            onChange={(e) => {
                                setdescription(e.target.value)
                            }}
                            name="Description" id="" placeholder='Enter product description here...' className='w-[99%] bg-gray-100 text-lg px-3 py-2 rounded-lg row-10 mb-5 h-60' ></textarea>

                        <div className='w-1/2'>
                            <button className='py-2 px-5 text-blue-400 border border-blue-200 hover:text-blue-800 hover:border-blue-500'>Add New Product</button>
                        </div>

                    </form>


                </div>
            </div></>
    )
}

export default Create