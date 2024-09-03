import { Outlet } from 'react-router-dom'
import './App.css'
import React, { useEffect, useState } from 'react'
import Navegacao from './components/Navegacao'
export default function App() {
  return (
    <>
    <Navegacao/>
    <React.StrictMode>
    <div id='divPrincipal'>
    <Outlet/>
    </div>
    </React.StrictMode>
    </>
  )
}