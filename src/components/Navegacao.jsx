import React from "react"
import { Link } from 'react-router-dom'

export default function Navegacao(){
 return(
  <nav>
   <ul>
    <li> <Link to="/TitleUpdater">Title</Link> </li>
    <li> <Link to="/WindowSize">Size</Link> </li>
    <li> <Link to="/PersistentCounter">Persistent</Link> </li>
    <li> <Link to="/RealTimeClock">Time</Link> </li>
    <li> <Link to="/ToggleText">Text</Link> </li>
    <li> <Link to="/LimitedCounter">Counter</Link> </li>
   </ul>
  </nav>
 )
}