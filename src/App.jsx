import Navbar from './Components/Navbar/Nav.jsx'
import Head from './Components/Head/Head.jsx'
import Port from './Components/Portfolio/Portfolio.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import NotFound from './Components/NotFound/NotFound.jsx'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'


function App() {

  let router = createBrowserRouter([
    {path:"" , element:<Layout /> , children:[
      {index:true , element:<Head />}, 
      {path:"portfolio" , element:<Port />},
      {path:"about" , element:<About />},
      {path:"contact" , element:<Contact />},
      {path:"*" , element:<NotFound />},
    ]}
  ])
    
  
    return (
      <>
  
  
  <RouterProvider router={router} ></RouterProvider>    
     
      </>
    )
  }
  
  export default App
  