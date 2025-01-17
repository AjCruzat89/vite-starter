import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Forbidden } from './pages'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="*" element={<Forbidden />}/>
      </Routes> 
    </>
  )
}

export default App