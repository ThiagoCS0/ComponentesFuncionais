import React from "react"
import { Link } from 'react-router-dom'

export default function Navegacao(){
 return(
  <nav>
   <ul>
    <li> <Link to="/ComponentesFuncionais/TitleUpdater">Title</Link> </li>
    <li> <Link to="/ComponentesFuncionais/WindowSize">Size</Link> </li>
    <li> <Link to="/ComponentesFuncionais/PersistentCounter">Persistent</Link> </li>
    <li> <Link to="/ComponentesFuncionais/RealTimeClock">Time</Link> </li>
    <li> <Link to="/ComponentesFuncionais/ToggleText">Text</Link> </li>
    <li> <Link to="/ComponentesFuncionais/LimitedCounter">Counter</Link> </li>
   </ul>
  </nav>
 )
}