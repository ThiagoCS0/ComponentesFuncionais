import React, { useEffect } from "react"
import { Link } from 'react-router-dom'

export default function Inicio(){
 useEffect(()=>{document.title="Inicio";},[])
 return(
  <>
  <nav>
   <ul>
    <li>
    <Link to="/inicio">Inicio</Link>
    </li>
    <li>
     <Link to="/sobre">Sobre</Link>
    </li>
   </ul>
  </nav>
  <div>
   <h1>Inicio</h1>
   <p>Tela inicial</p>
  </div>
  </>
 )
}