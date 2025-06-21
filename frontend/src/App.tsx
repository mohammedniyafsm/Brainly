import './App.css'
import { Home } from './components/pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Login } from './components/ui/Login'
import { Signup } from './components/ui/Signup'
import { Toaster } from "react-hot-toast";



function App() {

  return (
    <BrowserRouter>
    <Toaster />
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/login' Component={Login} />
      <Route path='/signup' Component={Signup} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
