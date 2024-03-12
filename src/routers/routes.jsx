import { Routes, Route } from "react-router-dom";
import { Home, Admin, Configuracion, Kardex, Reportes } from "../index";

export function MyRoutes() {
  return ( 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/configurar" element={<Configuracion />} />
        <Route path="/kardex" element={<Kardex />} />
        <Route path="/reportes" element={<Reportes />} />
      </Routes>
    
      
  );
}
