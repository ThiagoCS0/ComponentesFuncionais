import React, { useEffect, useRef, useState } from "react"
import { Link } from 'react-router-dom'

export default function LimitedCounter(){
 const focu=useRef(null)
 useEffect(()=>{document.title="LimitedCounter"; focu.current.focus(); },[])
 localStorage.setItem('ultimaSessao','Limited Counter');
 const [limite, defLimite]=useState(4)
 const [numero, defNumero]=useState(0)
 const [iniciar, defIniciar]=useState(false)

 useEffect(() => { let tmp; if (iniciar) { tmp = setInterval(()=>{ 
  if(numero < limite){ defNumero(numero => numero + 1); } else{ defIniciar(false); } }, 1000); } else { clearInterval(tmp); } return () => clearInterval(tmp); }, [iniciar, numero]);

 return(
  <div>
   <h1>Limited Counter</h1>
   <h3>Contador com Limite</h3>
   <p>Criar um contador que não ultrapasse um limite superior e que avise quando atingido.</p>
   <div id="divEntrada" style={{border:numero==limite?'1px solid #0BF':'none'}}>
    <p id="pEntrada">{numero}</p>
    <button className="botao" onClick={()=>{defLimite(limite < 1 ? 4 : limite); defNumero(0); defIniciar(!iniciar)}}>Iniciar</button>
    <input ref={focu} className="entrada" style={{ pointerEvents:iniciar?'none':'all', backgroundColor: limite==0?' #040': limite<0 ?'#400':iniciar?'#444':'#047'}} type="number" value={limite} onChange={e=>defLimite(e.target.value)}/>
    </div>
   <pre>
    <code>{'const [limite, defLimite] = useState(4)'}</code>
    <code>{'const [numero, defNumero] = useState(0)'}</code>
    <code>{'const [iniciar, defIniciar] = useState(false)'}</code>
    </pre>
   <pre>
    <code>{'useEffect(() => { let tmp;'}</code>
    <code>{'if (iniciar) { tmp = setInterval(()=>{'}</code>
    <code>{'if(numero < limite) { defNumero(numero => numero + 1) }'}</code>
    <code>{'else { defIniciar(false) }'}</code>
    <code>{'}, 1000)'}</code>
    <code>{'} else { clearInterval(tmp) }'}</code>
    <code>{'return () => clearInterval(tmp)'}</code>
    <code>{'}, [iniciar, numero]);'}</code>
   </pre>
   <p>No <span>return</span>.</p>
   <pre>
   <code>{'<p>{numero}</p>'}</code>
   <code>{'<button onClick={()=>{defLimite(limite < 1 ? 4 : limite); defNumero(0); defIniciar(!iniciar)}}>Iniciar</button>'}</code>
   <code>{'<input value={limite} onChange={e=>defLimite(e.target.value)}/>'}</code>
   </pre>
   <p>Acima só exibi as partes que interessam, retirei como fiz os estilos e o uso de useRef.</p>
  </div>
 )
}