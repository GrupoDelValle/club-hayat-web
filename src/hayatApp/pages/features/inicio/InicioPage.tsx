import { Box, Popover, Button, TextField, IconButton } from '@mui/material';
import { InitPage1 } from './features/1-InitPage';
import { CardsContacto3 } from './features/3-CardsContacto';
import { HayatAppLayout } from '../../../layout/HayatAppLayout';
import { loadingScreenHook } from '../../../hooks/loadingWait';
import { LoadingScreen } from '../../../ui/components/LoadingScreen';
import { useEffect, useState } from 'react';
import { RootState, useAppDispatch } from '../../../../store';
import { useSelector } from 'react-redux';
import { changeIndex } from '../../../../store/navbar/navBatSlice';
import { CardsInfo2 } from './features/2-CardsInfo';
import { MapaHayat } from './features/4-Maps-hayat';
import { RecorridoVirtual4 } from './features/4-RecorridoVirtual';
import { Servicios1 } from '../servicios/features/1-Servicios';
import { Experiencias2 } from '../servicios/features/2-Experiencias';
import { Reserva1 } from '../reserva/features/1-Reserva';

import SpeedDial from '@mui/material/SpeedDial';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Contacto1 } from '../contacto/features/1-Contacto';

import { WhatsApp } from '@mui/icons-material';
import { NosotrosPage } from '../nosotros/NosotrosPage';
import { PlanosMap } from '../../extras/Planos-Mapa';

export const InicioPage = () => {
  const { isLoading } = loadingScreenHook();
  const dispatch = useAppDispatch();
  const indexNav = useSelector((state: RootState) => state.nabBar.index);

  // Estado para manejar el Popover
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (indexNav !== 0) dispatch(changeIndex(0));
  }, [indexNav, dispatch]);

  const handleCloseForm = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <HayatAppLayout showForm={showForm} setShowForm={setShowForm} type="video">
      <Box
        flexDirection="column"
        justifyContent="top"
        alignItems="center"
        className="animate__animated animate__fadeIn animate__faster"
      >
        <InitPage1 />
        {/*<CardsContacto3 showForm={showForm} setShowForm={setShowForm}/>*/}
        <Servicios1 showForm={showForm} setShowForm={setShowForm}/>
        <Experiencias2 />
        <Reserva1 />
        <RecorridoVirtual4 />
        <MapaHayat />
        {<PlanosMap/>}
        <NosotrosPage/>

        <IconButton
          onClick={()=>{window.open('https://wa.me/51967392794?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20membres%C3%ADas.', '_blank')}}
          className='iconButton delay1'
          sx={{
              position: 'fixed', // Mantiene la posición fija en la pantalla
              bottom: '40px', // Se posiciona a 20px del borde inferior
              right: '0px', // Se posiciona a 20px del borde derecho
              width: '70px',
              height: '70px',
              m: '0 4vw 0 0',
              zIndex: 1000,
              backgroundColor: '#25d366', "&.MuiButtonBase-root:hover":{bgcolor:'#25d366'}}}>
          <WhatsApp sx={{color: '#ffffff', width: '50px', height: '50px',}}/>
        </IconButton>
        
        {/* Popover para el formulario */}
        {showForm && (
        <Box
          sx={{
            position: 'fixed',
            top: 110,
            right: 20,
            width: 300,
            height: 600,
            padding: 2,
            boxShadow: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '16px',
            zIndex: 1000,
            overflow: 'auto', // Para agregar un scrollbar si el contenido crece
            maxHeight: 600,
          }}
        >
          <Contacto1 showForm={showForm} setShowForm={setShowForm}/>
        </Box>
      )}
      </Box>
    </HayatAppLayout>
  );
};
