
import { Outlet, Route, Routes } from 'react-router-dom'
import AuthPage from './pages/auth/Index'
import Login from './pages/auth/Login'
import Registation from './pages/auth/Registation'
import Home from './pages/Home/Index'
import Navbar from './components/shared/Navbar'

function App() {


  return (
    <Routes>
      <Route
        element={
          <div>
           <Navbar/>
            <Outlet />
          </div>
        }
      >
     <Route path='/' element={<Home />} />
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/auth/login' element={<Login />} />
      <Route path='/auth/registation' element={<Registation />} />
      </Route>

      
    </Routes>

  )
}

export default App
