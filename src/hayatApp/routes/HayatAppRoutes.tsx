import { Navigate, Route, Routes } from "react-router-dom";

import { NosotrosPage } from "../pages/features/nosotros/NosotrosPage";
import { ContactoPage } from "../pages/features/contacto/ContactoPage";
import { ServiciosPage } from "../pages/features/servicios/ServiciosPage";
import { ReservaPage } from "../pages/features/reserva/ReservaPage";
import { InicioPage } from "../pages/features/inicio/InicioPage";
import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { changeIndex } from "../../store/navbar/navBatSlice";
import { TermsAndConditionsPage } from "../pages/extras/TermsAndConditionsPage";
import { InformacionPage } from "../pages/extras/InformacionPage";
import { PlanosMap } from "../pages/extras/Planos-Mapa";
import { HayatTermsAndConditions } from "../pages/extras/HayatTermsAndConditions";
import {Brochure} from "../pages/features/reserva/features/Brochure.tsx";


export const HayatAppRoutes = () => {
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Example: Set index based on the path
    const path = location.pathname;
    if (path === '/') {
      dispatch( changeIndex(0) );
    } else if (path === '/contacto'){
      dispatch( changeIndex(1) );
    } else if (path === '/nosotros'){
      dispatch( changeIndex(2) );
    } else if (path === '/servicios'){
      dispatch( changeIndex(3) );
    }else if (path === '/brochure-departamentos'){
      dispatch( changeIndex(5) );
    }
  }, [location, dispatch]);

  
  return (
      
      <Routes>
          <Route path="/" element={ <InicioPage /> } />
          <Route path='/informacion' element={<InformacionPage/>} />
          
          {/* RUTAS EXTRA */}
          <Route path="/plano-hayat" element={ <PlanosMap/> }/>
          <Route path="/hayat-terminos-y-condiciones" element={ <HayatTermsAndConditions/> } />
          <Route path='/*' element={ <Navigate to="/" /> } />
      </Routes>
    )
  }