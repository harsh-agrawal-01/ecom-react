import React from 'react'
import Home from './components/Home'
import { Route, Routes, Link, useLocation } from 'react-router-dom'
import Details from './components/Details'
import Create from './components/Create'
import Edit from './components/Edit'

const App = () => {

  


  return (
    <div className="w-screen h-screen flex">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />}/>
      <Route path='/details/:id' element = {<Details />} />
      <Route path='/edit/:id' element = {<Edit />} />

    </Routes>

    </div>
  )
}

export default App
