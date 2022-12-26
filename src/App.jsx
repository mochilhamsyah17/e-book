import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage/LoginPage'
import NavbarMain from './components/Navbar/NavbarMain'

function App() {

  return (
    <>
      <NavbarMain/>
      <HomePage/>
    {/* <LoginPage/> */}
    </>
  )
}

export default App
