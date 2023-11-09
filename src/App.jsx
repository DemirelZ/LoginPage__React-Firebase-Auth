
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import AuthPage from './pages/AuthPage'
import ProtectedRoute from './pages/ProtectedRoute'
import LoginPage from './pages/LoginPage'


function App() {
  

  return (
    <>
   <BrowserRouter>
    <Routes>

      <Route path='/' element={<AuthPage/>} />

      <Route element={<ProtectedRoute/>}>
        <Route path='/login' element={<LoginPage/>} />
      </Route>

    </Routes>
   
   </BrowserRouter>
    </>
  )
}

export default App
