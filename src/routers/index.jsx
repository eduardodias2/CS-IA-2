import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";


export function Routers () {
  const {user} = useAuth()
  return (
    <BrowserRouter>
    {user ? <AppRoutes/> : <AuthRoutes/>}
    </BrowserRouter>
  )
}