import React, { useState } from 'react';
import { Button, Typography, ToggleButton, ToggleButtonGroup, CardContent, Box, ImageList, ImageListItem } from '@mui/material';
import Grid from "@mui/material/Grid2";
import Depa75_1 from "../assets/depa_tipo_75_plano.png";
import Depa75_2 from "../assets/depa_tipo_75_sala.jpg";
import Depa75_3 from "../assets/depa_tipo_75_habitacion.jpg";
import Depa95_1 from "../assets/depa_tipo_95_plano.png";
import Depa95_2 from "../assets/depa_tipo_95_sala.jpg";
import Depa95_3 from "../assets/depa_tipo_95_habitacion.jpg";
import Depa115_1 from "../assets/depa_tipo_115_plano.png";
import Depa115_2 from "../assets/depa_tipo_115_sala.jpg";
import Depa115_3 from "../assets/depa_tipo_115_habitacion.jpg";
import Depa230_1 from "../assets/depa_tipo_230_plano.png";
import Depa230_2 from "../assets/depa_tipo_230_sala.jpg";
import Depa230_3 from "../assets/depa_tipo_230_azotea.jpg";
import Depa230_4 from "../assets/depa_tipo_230_terraza.jpg";

interface Apartment {
  id: string;
  name: string;
  area: string;
  image: string;
  tipology: number;
}

const apartments: Apartment[] = [
  { id: '07501', name: 'Distribución de Suites', area: '75 m²', image: Depa75_1, tipology: 75 },
  { id: '07502', name: 'Distribución de Suites', area: '75 m²', image: Depa75_2, tipology: 75 },
  { id: '07503', name: 'Distribución de Suites', area: '75 m²', image: Depa75_3, tipology: 75 },
  { id: '09501', name: 'Distribución de Suites', area: '95 m²', image: Depa95_1, tipology: 95 },
  { id: '09502', name: 'Distribución de Suites', area: '95 m²', image: Depa95_2, tipology: 95 },
  { id: '09503', name: 'Distribución de Suites', area: '95 m²', image: Depa95_3, tipology: 95 },
  { id: '11501', name: 'Distribución de Suites', area: '115 m²', image: Depa115_1, tipology: 115 },
  { id: '11502', name: 'Distribución de Suites', area: '115 m²', image: Depa115_2, tipology: 115 },
  { id: '11503', name: 'Distribución de Suites', area: '115 m²', image: Depa115_3, tipology: 115 },
  { id: '23001', name: 'Distribución de Departamentos', area: '230 m²', image: Depa230_1, tipology: 230 },
  { id: '23002', name: 'Distribución de Departamentos', area: '230 m²', image: Depa230_2, tipology: 230 },
  { id: '23003', name: 'Distribución de Departamentos', area: '230 m²', image: Depa230_3, tipology: 230 },
  { id: '23004', name: 'Distribución de Departamentos', area: '230 m²', image: Depa230_4, tipology: 230 },
];

const FilterComponent: React.FC = () => {
  const [selectedTipologias, setSelectedTipologias] = useState<number | null>(0);
  const [selectedView, setSelectedView] = useState<'Suites' | 'Penthouses' | 'Todos'>('Todos');

  const handleTipologyChange = (event: React.MouseEvent<HTMLElement>, newRooms: number | null) => {
    setSelectedTipologias(newRooms);
  };

  const handleViewChange = (event: React.MouseEvent<HTMLElement>, newView: 'Suites' | 'Penthouses' | 'Todos') => {
    setSelectedView(newView);
  };

  return (
    <Box sx={{ padding: 4}}>
      <Grid container spacing={4} >
        {/* Filtros a la izquierda */}
        <Grid size={{xs:12, sm:4}}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>Distribución de Suites y Penthouses</Typography>
            <br/>
            <Typography variant="subtitle1" gutterBottom>Filtros</Typography>
            <br/>
          </Box>
          <Box mb={3}>
            <Typography variant="body1" gutterBottom>Tipo de Departamento</Typography>
            <ToggleButtonGroup
              value={selectedView}
              exclusive
              onChange={handleViewChange}
              aria-label="Vista del departamento"
              fullWidth
            >
              <ToggleButton value="Suites">Suites</ToggleButton>
              <ToggleButton value="Penthouses">Penthouses</ToggleButton>
              <ToggleButton value="Todos">Todos</ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <br/>
          <br/>
          <br/>
          {( selectedView === "Penthouses") ? 
            <Box mb={3}>
            <Typography variant="body1" gutterBottom>Tipologías</Typography>
            <ToggleButtonGroup
              value={selectedTipologias}
              exclusive
              onChange={handleTipologyChange}
              aria-label="Número de dormitorios"
              fullWidth
            >
              <ToggleButton value={230}>230 m²</ToggleButton>
              <ToggleButton value={0}>Todos</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        :
        (selectedView === "Suites") ?
          <Box mb={3}>
            <Typography variant="body1" gutterBottom>Tipologías</Typography>
            <ToggleButtonGroup
              value={selectedTipologias}
              exclusive
              onChange={handleTipologyChange}
              aria-label="Número de dormitorios"
              fullWidth
            >
              <ToggleButton value={75}>75 m²</ToggleButton>
              <ToggleButton value={95}>95 m²</ToggleButton>
              <ToggleButton value={115}>115 m²</ToggleButton>
              <ToggleButton value={0}>Todos</ToggleButton>
            </ToggleButtonGroup>
          </Box>
          :
          <Box mb={3}>
            <Typography variant="body1" gutterBottom>Tipologías</Typography>
            <ToggleButtonGroup
              value={selectedTipologias}
              exclusive
              onChange={handleTipologyChange}
              aria-label="Número de dormitorios"
              fullWidth
            >
              <ToggleButton value={75}>75 m²</ToggleButton>
              <ToggleButton value={95}>95 m²</ToggleButton>
              <ToggleButton value={115}>115 m²</ToggleButton>
              <ToggleButton value={230}>230 m²</ToggleButton>
              <ToggleButton value={0}>Todos</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        }
          
          
        </Grid>

        {/* Lista de departamentos a la derecha */}
        <Grid size={{xs:12, sm:8}}>
            <Box sx={{ height: 450, maxHeight: 450, overflowY: 'auto', border: '1px solid #ccc', boxShadow: 3, borderRadius: 2 }}>
                <ImageList cols={1} gap={16} >
                    {apartments
                    .filter(apartment => selectedTipologias === 0 || apartment.tipology === selectedTipologias)
                    .map((apartment) => (
                        <ImageListItem key={apartment.id} style={{ display: 'flex', justifyContent: 'center', padding: '20px 20px 20px 20px' }}>
                            <Grid container>
                              <Grid size={8}>
                                <img
                                    src={apartment.image}
                                    alt={apartment.name}
                                    loading="lazy"
                                    style={{ width: '100%', height: 'auto', borderRadius: 2 }}
                                />
                              </Grid>
                              <Grid size={4} alignContent={'center'}>
                                <CardContent>
                                    <Typography variant="subtitle1" gutterBottom>{apartment.name}</Typography>
                                    <Typography variant="body2" gutterBottom>{apartment.area}</Typography>
                                    <Button variant="contained" sx={{ backgroundColor: '#1976d2', color: '#fff' }} fullWidth>Cotizar</Button>
                                </CardContent>
                              </Grid>
                            </Grid>
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FilterComponent;
