
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import AuthPage from './pages/AuthPage'
import ProtectedRoute from './pages/ProtectedRoute'
import LoginPage from './pages/LoginPage'
import UserAccount from './pages/UserAccount'
import ResetPasswordPage from './pages/ResetPasswordPage'


function App() {
  

  return (
    <>
   <BrowserRouter>
    <Routes>

      <Route path='/' element={<AuthPage/>} />
      {/* <Route path='/userAccount' element={<UserAccount/>} /> */}
      <Route path='/resetPasswordPage' element={<ResetPasswordPage/>} />

      <Route element={<ProtectedRoute/>}>
      <Route path='/userAccount' element={<UserAccount/>} />
      </Route>

    </Routes>
   
   </BrowserRouter>
    </>
  )
}

export default App
