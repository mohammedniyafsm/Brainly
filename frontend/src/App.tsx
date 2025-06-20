import './App.css'
import { Home } from './components/pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Login } from './components/ui/Login'
import { Signup } from './components/ui/Signup'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/login' Component={Login} />
      <Route path='/signup' Component={Signup} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
