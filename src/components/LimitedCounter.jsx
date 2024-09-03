import React, { useEffect, useRef, useState } from "react"
import { Link } from 'react-router-dom'

export default function LimitedCounter(){
 useEffect(()=>{document.title="LimitedCounter";},[])
localStorage.setItem('ultimaSessao','Limited Counter');
const [numero, defNumero]=useState(4)
const [iniciar, defIniciar]=useState(false)

 useEffect(() => { let tmp; if (iniciar) { tmp = setInterval(()=>{ if(numero > 0){ defNumero(numero => numero - 1) } else{ defIniciar(false); }  }, 1000); } else { clearInterval(tmp); } return () => clearInterval(tmp); }, [iniciar, numero]);

 return(
  <div>
   <h1>Limited Counter</h1>
   <h3>Contador com Limite</h3>
   <p>Criar um contador que não ultrapasse um limite superior e que avise quando atingido.</p>
   <div id="divEntrada">
    <input className="entrada" style={{backgroundColor: numero==0?' #040': numero<0 ?'#400':'#047'}} type="number" value={numero} onChange={e=>defNumero(e.target.value)}/>
    <button className="botao" onClick={()=>{defNumero(numero < 1 ? 4 : numero); defIniciar(!iniciar)}}>Iniciar</button>
   </div>
   <pre>
    <code>{'const [numero, defNumero] = useState(4)'}</code>
    <code>{'const [iniciar, defIniciar] = useState(false)'}</code>
    </pre>
   <pre>
    <code>{'useEffect(() => { let tmp;'}</code>
    <code>{'if (iniciar) { tmp = setInterval(()=>{'}</code>
    <code>{'if(numero > 0) { defNumero(numero => numero - 1) }'}</code>
    <code>{'else { defIniciar(false) }'}</code>
    <code>{'}, 1000)'}</code>
    <code>{'} else { clearInterval(tmp) }'}</code>
    <code>{'return () => clearInterval(tmp)'}</code>
    <code>{'}, [iniciar, numero]);'}</code>
   </pre>
   <p>No <span>return</span>.</p>
   <pre>
   <code>{"<input style={{backgroundColor: numero == 0 ? '#040' : numero < 0 ? '#400' : '#047'}} type='number' value={numero} onChange={ e => defNumero(e.target.value) }/>"}</code>
   <code>{'<button onClick={ () => { defNumero(numero == 0 ? 4 : numero); defIniciar(!iniciar) }}>Iniciar</button>'}</code>
   </pre>
  </div>
 )
}