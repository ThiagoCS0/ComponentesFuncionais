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
    {path:"/TitleUpdater", element:<TitleUpdater/>}, {path:'/TitleUpdater',element:<TitleUpdater/>},
    {path:'/WindowSize',element:<WindowSize/>}, {path:'/WindowSize',element:<WindowSize/>},
    {path:'/PersistentCounter',element:<PersistentCounter/>}, {path:'/PersistentCounter',element:<PersistentCounter/>},
    {path:'/RealTimeClock',element:<RealTimeClock/>}, {path:'/RealTimeClock',element:<RealTimeClock/>},
    {path:'/ToggleText',element:<ToggleText/>}, {path:'/ToggleText',element:<ToggleText/>},
    {path:'/LimitedCounter',element:<LimitedCounter/>}, {path:'/LimitedCounter',element:<LimitedCounter/>}
  ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={rotas}/>
)