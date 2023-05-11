import { Routes, Route } from 'react-router-dom';
import { Login } from '../Pages/Login';
import { Register } from '../Pages/Register';

export function AuthRoutes () {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
  )
}