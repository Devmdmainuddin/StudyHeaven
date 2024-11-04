
import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/auth/Index'
import Login from './pages/auth/Login'
import Registation from './pages/auth/Registation'

function App() {


  return (
    <Routes>
      <Route path='/auth' element={<AuthPage/>}/>
      <Route path='/auth/login' element={<Login/>}/>
      <Route path='/auth/registation' element={<Registation/>}/>
    </Routes>

  )
}

export default App
