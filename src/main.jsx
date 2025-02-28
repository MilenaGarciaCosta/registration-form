import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromChildren, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './routers/Home.jsx';
import Erro from './routers/Erro.jsx';
import Formulario from './routers/Formulario.jsx';
import Foto from './routers/Foto.jsx';
import Finalizado from './routers/Finalizado.jsx';

const router = createBrowserRouter([
  {
    //Elementos pai
    path:'/', element: <App/>,
    errorElement: <Erro/>,
    //Elementos filho
    children:[
      {path: '/', element: <Home/>},
      {path: '/cadastrar', element: <Formulario/>},
      {path: '/foto', element: <Foto/>},
      {path: '/concluido', element: <Finalizado/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
