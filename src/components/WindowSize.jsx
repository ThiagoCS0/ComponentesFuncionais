import React, { useEffect, useRef, useState } from "react"
import { Link } from 'react-router-dom'
export default function WindowSize(){
localStorage.setItem('ultimaSessao','Window Size');

const [tamanho, defTamanho]=useState([window.innerWidth, window.innerHeight])
 useEffect(()=>{document.title="WindowSize";},[]) 
 useEffect(() => {
  function Tamanho() {defTamanho([window.innerWidth, window.innerHeight]);}
  window.addEventListener('resize', Tamanho); return () => window.removeEventListener('resize', Tamanho);}, []);

  return(
  <div>
   <h1>Window Size</h1>
   <h3>Monitoramento de Largura da Janela</h3>
   <p>Criar um componente que monitore e exiba a largura da janela do navegador, atualizando-se conforme a janela é redimensionada.</p>
   <p id="tamanho">Largura: <span>{tamanho[0]}</span> Altura: <span>{tamanho[1]}</span></p>
   <pre>
   <code>{`const [tamanho, defTamanho] = useState([window.innerWidth, window.innerHeight])`}</code>
   <code>{`useEffect(() => {`}</code>
   <code>{`function Tamanho() {`}</code>
   <code>{`defTamanho([window.innerWidth, window.innerHeight]) }`}</code>
   <code>{`window.addEventListener('resize', Tamanho)`}</code>
   <code>{`return () => window.removeEventListener('resize', Tamanho)`}</code>
   <code>{`}, [])`}</code>
   </pre>
   <p>No <span>return</span>:</p>
   <pre>
    <code>{"Largura: {tamanho[0]} Altura: {tamanho[1]}"}</code>
   </pre>
   </div>  
 )
}