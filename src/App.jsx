
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutsOne from './Layouts/LayoutsOne'


function App() {

  const myRoute = createBrowserRouter (createRoutesFromElements(
    <Route>
        <Route  path='/' element=  {<LayoutsOne/>} />


    </Route>
  ))


  return (
    <>
       <RouterProvider router={myRoute}/>
     
    </>
  )
}

export default App
