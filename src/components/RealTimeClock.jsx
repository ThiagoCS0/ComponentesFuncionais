import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

export default function RealTimeClock(){
 useEffect(()=>{document.title="RealTimeClock";},[])
localStorage.setItem('ultimaSessao','Real Time Clock');
const [tempo, defTempo] = useState(new Date().toLocaleTimeString())
useEffect(()=>{ const tmp = setInterval(() => {defTempo(new Date().toLocaleTimeString(),1000)}); return ()=>{clearInterval(tmp)} })
return(
  <div>
   <h1>Real Time Clock</h1>
   <h3>Relógio em Tempo Real</h3>
   <p>Criar um relógio digital que atualiza a hora a cada segundo.</p>
   <p id="relogio">{tempo}</p> 
   <pre>
    <code>{"const [tempo, defTempo] = useState(new Date().toLocaleTimeString())"}</code>
    <code>{"useEffect(()=>{ ()=>{ "}</code>
    <code>{"const tmp = setInterval(()=>{ defTempo(new Date().toLocaleTimeString(), 1000) })"}</code>
    <code>{"return ()=>{ clearInterval(tmp) }"}</code>
    <code>{"})"}</code>
   </pre>
   <p>No <span>return</span>:</p>
   <pre>
    <code>{"<p>{tempo}</p> "}</code>
   </pre>
  </div>
 )
}