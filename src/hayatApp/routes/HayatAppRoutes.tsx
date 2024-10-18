import { Navigate, Route, Routes } from "react-router-dom";
import { InicioPage } from "../pages/features/inicio/InicioPage";
import { InformacionPage } from "../pages/extras/InformacionPage";
import { HayatTermsAndConditions } from "../pages/extras/HayatTermsAndConditions";


export const HayatAppRoutes = () => {

  
  return (
      
      <Routes>
          <Route path="/" element={ <InicioPage /> } />
          <Route path='/informacion' element={<InformacionPage/>} />
          
          {/* RUTAS EXTRA */}
          <Route path="/hayat-terminos-y-condiciones" element={ <HayatTermsAndConditions/> } />
          <Route path='/*' element={ <Navigate to="/" /> } />
      </Routes>
    )
  }