import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import WindowSize from './components/WindowSize'
import ToggleText from './components/ToggleText'
import TitleUpdater from './components/TitleUpdater'
import RealTimeClock from './components/RealTimeClock'
import LimitedCounter from './components/LimitedCounter'
import PersistentCounter from './components/PersistentCounter'
import Navegacao from './components/Navegacao.jsx'

const rotas=createBrowserRouter([
  {path:"/", element:<App/>,children:[
    {path:"/ComponentesFuncionais", element:<TitleUpdater/>},
    {path:"/ComponentesFuncionais/TitleUpdater", element:<TitleUpdater/>},
    {path:'/ComponentesFuncionais/WindowSize',element:<WindowSize/>},
    {path:'/ComponentesFuncionais/PersistentCounter',element:<PersistentCounter/>},
    {path:'/ComponentesFuncionais/RealTimeClock',element:<RealTimeClock/>},
    {path:'/ComponentesFuncionais/ToggleText',element:<ToggleText/>},
    {path:'/ComponentesFuncionais/LimitedCounter',element:<LimitedCounter/>},
  ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={rotas}/>
)