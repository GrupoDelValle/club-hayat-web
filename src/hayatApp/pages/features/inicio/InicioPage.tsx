import { Box, Popover, Button, TextField } from '@mui/material';
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
    setAnchorEl(null); // Cierra el Popover
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <HayatAppLayout type="video">
      <Box
        flexDirection="column"
        justifyContent="top"
        alignItems="center"
        className="animate__animated animate__fadeIn animate__faster"
      >
        <InitPage1 />
        <CardsInfo2 />
        <CardsContacto3 />
        <Servicios1 />
        <Experiencias2 />
        <Reserva1 />
        <RecorridoVirtual4 />
        <MapaHayat />
        
        {/* SpeedDial con acciones */}
        <SpeedDial
          ariaLabel="Contáctanos"
          sx={{ position: 'fixed', bottom: 40, right: 40 }}
          icon={<ContactMailIcon />}
          onClick={() => setShowForm((prev) => !prev)}
          key={'Contáctanos'}
        >
        </SpeedDial>
        
        {/* Popover para el formulario */}
        {showForm && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 120, // Ubica el formulario sobre el botón
            right: 40,
            width: 300, // Ancho fijo
            padding: 2,
            boxShadow: 3, // Sombra para darle un efecto flotante
            backgroundColor: 'white', // Fondo blanco
            borderRadius: 2,
            zIndex: 1000, // Se asegura de que el formulario quede por encima del contenido
          }}
        >
          {/*<form>
            <TextField
              label="Nombre"
              type="text"
              fullWidth
              margin="dense"
            />
            <TextField
              label="Correo Electrónico"
              type="email"
              fullWidth
              margin="dense"
            />
            <TextField
              label="Mensaje"
              multiline
              rows={3}
              fullWidth
              margin="dense"
            />
            <Button onClick={() => setShowForm(false)} color="primary" variant="contained" fullWidth>
              Enviar
            </Button>
          </form>*/}
          <Contacto1/>
        </Box>
      )}
      </Box>
    </HayatAppLayout>
  );
};
