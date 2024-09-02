import React, { useEffect } from "react"
import { Link } from 'react-router-dom'

export default function Sobre(){
 useEffect(()=>{document.title="Sobre";},[])

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
   <h1>Sobre</h1>
   <p>Página sobre o site...</p>
  </div>
  </>
 )
}