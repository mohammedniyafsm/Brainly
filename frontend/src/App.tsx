import './App.css'
import { Home } from './components/pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Login } from './components/ui/Login'
import { Signup } from './components/ui/Signup'
import { Toaster } from "react-hot-toast";
import { SharedPage } from './components/pages/shareBrainPage'



function App() {

  return (
    <BrowserRouter>
    <Toaster />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/share/:hash" element={<SharedPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
