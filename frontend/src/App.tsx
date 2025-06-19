import './App.css'
import { Home } from './components/pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Login } from './components/ui/Login'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Home} />
      <Route path='/login' Component={Login} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
