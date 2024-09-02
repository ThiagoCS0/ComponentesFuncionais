import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Inicio from './components/Inicio'
import Sobre from './components/Sobre'

const rotas=createBrowserRouter([
  {path:"/", element:<App/>,children:[
    {path:"/ComponentesFuncionais/", element:<Inicio/>},
    {path:"/ComponentesFuncionais/Inicio", element:<Inicio/>},
    {path:'/Inicio',element:<Inicio/>},
    {path:'/sobre',element:<Sobre/>}
  ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rotas}/>
  </React.StrictMode>
)