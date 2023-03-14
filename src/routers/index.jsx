import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routers () {
  const authPage = true
  return (
    <BrowserRouter>
    {authPage ? <AuthRoutes/> : <AppRoutes/>}
    </BrowserRouter>
  )
}