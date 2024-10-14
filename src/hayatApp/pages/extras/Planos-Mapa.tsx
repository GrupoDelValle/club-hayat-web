import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { MapContainer, ImageOverlay} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './components/leaflet-rewrite.css';

import { widthScreen } from '../../hooks/widthScreen';
import { useNavigate } from 'react-router-dom';

import logoHayat from '../../../assets/hayat-logo.webp';
import plano from '../../../assets/plano.png';

export const PlanosMap: React.FC = () => {
  
  const navigate = useNavigate();
  const handleOnClickLogo = ()=>{
    navigate('/');
  }

  const {width} = widthScreen();

  return (
    <Box color='black' border={1} width='100vw' >
      <Box display='flex' justifyContent='end' color={'red'} height='100%' width={
          (width < 935) 
              ? (width < 400)
                  ? '45vw'
                  : '5vw'
              : '100%'} sx={{ transition: 'width  0.7s ease-in-out' }} >
          
      </Box>
      <Typography position='relative' fontWeight='bold' fontSize={ (width < 650) ? '3.5vw' : '2vw' }textAlign='center' m='20px 10%' > HAYAT CLUB - PLANOS </Typography>
      <Box width='100%' height={(width < 500) ? '83vh' : '85vh'} overflow='hidden' >
      <MapContainer
        center={[10,31]}
        zoom={(width < 500) ? 2 : 3}
        minZoom={(width < 500) ? 2 : 3}
        style={{ height: '87vh', width: '100vw'}} 
        maxBounds={[[0, 0], [80, 250]]}
        maxBoundsViscosity={0.8}
      >
        <ImageOverlay
          url={plano}
          bounds={[[0,0],[80,250]]}
          interactive={true}
        />
      </MapContainer>
      </Box>
    </Box>
  );
};