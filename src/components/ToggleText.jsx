import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

export default function ToggleText(){
 useEffect(()=>{document.title="ToggleText";},[])
localStorage.setItem('ultimaSessao','Toggle Text');
const [visivel, defVisivel]=useState(false);
const Visivel=()=>{defVisivel(!visivel);}
return(
  <div>
   <h1>Toggle Text</h1>
   <h3>Exibir/Mostrar Texto</h3>
   <p>Criar um componente que alterna entre exibir e esconder um texto com o clique de um botão.</p>
   <div id="textoVisivel" style={{height:"fit-content"}}>
    <button className="botao" onClick={Visivel}>{visivel?'Ocultar':'Exibir'}</button>
    <p style={{opacity:visivel?'1':'0'}}>Texto está visivel!</p>
   </div>
   <pre>
    <code>{"const [visivel, defVisivel] = useState(false);"}</code>
    <code>{"const Visivel=()=>{ defVisivel(!visivel); }"}</code>
    </pre>
    <p>No <span>return</span>:</p>
    <pre>
    <code>{"<button onClick={ Visivel }>{ visivel ? 'Ocultar' : 'Exibir' }</button>"}</code>
    <code>{"<p style={{ opacity: visivel ? '1' : '0' }}>Texto está visivel!</p>"}</code>
    </pre>
    <p>Ou simplismente:</p>
    <pre>
    <code>{"{visivel && <p>Texto está visivel!</p>}"}</code>
   </pre>
  </div>
 )
}