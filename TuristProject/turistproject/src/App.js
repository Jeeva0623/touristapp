import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Services from './Services';
import TuristRegister from './TuristRegister';
//import Search from './Search';
import Package from './Package';
import Update from './Update';
import Delete from './Delete';
import Login from './Login';
import Register from './Register';
//import Lifecycle from './Lifecycle';
//import Loginatc from './Loginatc';



const routerconfig= createBrowserRouter(
  [
    {path:'/Home',element:<Home/>},
    {path:'/About',element:<About/>},
    {path:'/Services',element:<Services/>},
    {path:'/turistregister',element:<TuristRegister/>},
    //{path:'/Search',element:<Search/>},
    {path:'/Package',element:<Package/>},
    {path:'/Update',element:<Update/>},
    {path:'/Delete',element:<Delete/>},
    {path:'/Login',element:<Login/>},
    {path:'/Register',element:<Register/>},
   // {path:'/Lifecycle',element:<Lifecycle/>},
    //{path:'/Loginatc',element:<Loginatc/>},
    {path:'',element:<Login/>}
    
  ]
)

function App() {
  return (
    <RouterProvider router={routerconfig}/>
  )
}

export default App;
