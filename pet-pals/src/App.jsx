import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import './App.css'
import { Header, Footer } from './Components'
import React from 'react'


function App() {
 
  

  return (
    <>
<Header />
    <Outlet />
    <Footer />
     
    </>
  )
}

export default App
