import React, { useState } from 'react';
import { Button, Typography, ToggleButton, ToggleButtonGroup, CardContent, Box, ImageList, ImageListItem } from '@mui/material';
import Grid from "@mui/material/Grid2";
import Depa1 from "../assets/depa2.jpg";
import Depa2 from "../assets/depa1.jpg";
import Depa3 from "../assets/depa3.jpg";
import Depa4 from "../assets/depa4.jpg";
import Depa5 from "../assets/depa5.jpg";

interface Apartment {
  id: string;
  name: string;
  area: string;
  image: string;
  rooms: number;
}

const apartments: Apartment[] = [
  { id: '205', name: 'Flat 205', area: '58.61 m²', image: Depa1, rooms: 1 },
  { id: '306', name: 'Flat 306', area: '65.90 m²', image: Depa2, rooms: 2 },
  { id: 'X06A', name: 'Flat X06A', area: '59.39 m²', image: Depa2, rooms: 2 },
  { id: 'X01', name: 'Flat X01', area: '63.49 m²', image: Depa2, rooms: 2 },
  { id: 'X02', name: 'Flat X01', area: '63.49 m²', image: Depa3, rooms: 3 },
  { id: 'X03', name: 'Flat X01', area: '63.49 m²', image: Depa3, rooms: 3 },
  { id: 'X04', name: 'Flat X01', area: '63.49 m²', image: Depa3, rooms: 3 },
  { id: 'X05', name: 'Flat X01', area: '63.49 m²', image: Depa3, rooms: 3 },
];

const FilterComponent: React.FC = () => {
  const [selectedRooms, setSelectedRooms] = useState<number | null>(2);
  const [selectedView, setSelectedView] = useState<'Exterior' | 'Interior' | 'Todos'>('Todos');

  const handleRoomChange = (event: React.MouseEvent<HTMLElement>, newRooms: number | null) => {
    if (newRooms !== null) {
      setSelectedRooms(newRooms);
    }
  };

  const handleViewChange = (event: React.MouseEvent<HTMLElement>, newView: 'Exterior' | 'Interior' | 'Todos') => {
    setSelectedView(newView);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        {/* Filtros a la izquierda */}
        <Grid size={{xs:12, sm:6}}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>Elige tu CASAIDEAL</Typography>
            <Typography variant="subtitle1" gutterBottom>Filtros</Typography>
          </Box>
          <Box mb={3}>
            <Typography variant="body1" gutterBottom>Número de dormitorios</Typography>
            <ToggleButtonGroup
              value={selectedRooms}
              exclusive
              onChange={handleRoomChange}
              aria-label="Número de dormitorios"
              fullWidth
            >
              <ToggleButton value={1}>01</ToggleButton>
              <ToggleButton value={2}>02</ToggleButton>
              <ToggleButton value={3}>03</ToggleButton>
              <ToggleButton value={4}>Todos</ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Box mb={3}>
            <Typography variant="body1" gutterBottom>Vista del departamento</Typography>
            <ToggleButtonGroup
              value={selectedView}
              exclusive
              onChange={handleViewChange}
              aria-label="Vista del departamento"
              fullWidth
            >
              <ToggleButton value="Exterior">Exterior</ToggleButton>
              <ToggleButton value="Interior">Interior</ToggleButton>
              <ToggleButton value="Todos">Todos</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Grid>

        {/* Lista de departamentos a la derecha */}
        <Grid size={{xs:12, sm:6}}>
            <Box sx={{ height: 400, maxHeight: 400, overflowY: 'auto', border: '1px solid #ccc', boxShadow: 3 }}>
                <ImageList cols={2} gap={16} >
                    {apartments
                    .filter(apartment => selectedRooms === null || apartment.rooms === selectedRooms)
                    .map((apartment) => (
                        <ImageListItem key={apartment.id} style={{ display: 'flex', justifyContent: 'center', padding: '20px 20px 20px 20px' }}>
                            <img
                                src={apartment.image}
                                alt={apartment.name}
                                loading="lazy"
                                style={{ width: '100%', height: 'auto' }}
                            />
                            <CardContent>
                                <Typography variant="subtitle1" gutterBottom>{apartment.name}</Typography>
                                <Typography variant="body2" gutterBottom>{apartment.area}</Typography>
                                <Button variant="contained" sx={{ backgroundColor: '#1976d2', color: '#fff' }} fullWidth>Cotizar</Button>
                            </CardContent>
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
