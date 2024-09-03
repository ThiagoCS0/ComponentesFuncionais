import React, { useEffect } from "react"
import { Link } from 'react-router-dom'

export default function TitleUpdater(){
 useEffect(()=>{document.title="TitleUpdater";},[])
localStorage.setItem('ultimaSessao','Title Updater');
return(
  <div>
   <h1>Title Updater</h1>
   <h3>Atualização de Título com useEffect</h3>
   <p>Atualizar o título da aba do navegador conforme o usuário interage com o componente.</p>
   <pre>
    <code>{"useEffect(()=>{ document.title='TitleUpdater';} ,[])"}</code>
   </pre>
  </div>
 )
}