import React, { useEffect } from "react"
import { Link } from 'react-router-dom'

export default function PersistentCounter(){
 const ultimaSessao = localStorage.getItem('ultimaSessao'); 
 return(
  <div>
   <h1>Persistent Counter</h1>
   <h3>Sincronização de Estado com Local Storage</h3>
   <p>Sincronizar o estado de um componente com o Local Storage para manter dados entre as sessões do navegador.</p>
   <p>A ultima sessão foi <span>{ultimaSessao}</span></p>
   <hr/>
   <p>Neste componente:</p>
   <pre>
    <code>{"const ultimaSessao = localStorage.getItem('ultimaSessao')"}</code>
   </pre>
   <p>Demais componente:</p>
   <pre>
    <code>{"localStorage.setItem('ultimaSessao','"}{ultimaSessao}{"')"}</code>
   </pre>
  </div>
 )
}