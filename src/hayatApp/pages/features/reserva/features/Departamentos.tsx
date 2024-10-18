import React, { useState } from 'react';
import { Typography, ToggleButton, ToggleButtonGroup, Box } from '@mui/material';
import Grid from "@mui/material/Grid2";
import Depa1 from "../assets/depa1.jpg";
import Depa2 from "../assets/depa2.jpg";
import Depa3 from "../assets/depa3.jpg";
import Depa4 from "../assets/depa4.jpg";
import Depa5 from "../assets/depa5.jpg";
import { CarruselFotos } from './CarruselFotos';

const imagesUnifamiliares = [
  {
    original: Depa1,
    thumbnail: Depa1,
  },
  {
    original: Depa2,
    thumbnail: Depa2,
  },
  {
    original: Depa3,
    thumbnail: Depa3,
  },
];

const imagesMultifamiliares = [
  {
    original: Depa4,
    thumbnail: Depa4,
  },
  {
    original: Depa5,
    thumbnail: Depa5,
  },
];

const FilterComponent: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'Unifamiliares' | 'Multifamiliares' | null>('Unifamiliares');

  const handleTypeChange = (event: React.MouseEvent<HTMLElement>, newType: 'Unifamiliares' | 'Multifamiliares' | null) => {
    setSelectedType(newType);
  };

  return (
    <Box sx={{ padding: { xs: 2, md: 4 }, marginBottom: 10, width: '100%' }}>
      <Grid container spacing={4} display={'flex'}>
        {/* Filtros a la izquierda */}
        <Grid size={{ xs: 12, sm: 4 }} alignItems="center" sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          <Box sx={{ mb: 3 }}>
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ fontWeight: 'bold', color: '#0c4a97', textTransform: 'uppercase' }}
            >
              Lotes para ti y tu familia
            </Typography>
            <br/>
            <br/>
            <br/>
            <Typography variant="subtitle1" color="text.secondary">
              Elige el tipo de lote que se adapta a tus necesidades.
            </Typography>
            <br/>
          </Box>
          <Box mb={3}>
            <Typography variant="body1" gutterBottom sx={{ fontWeight: 'medium', color: 'black' }}>
              Tipo de Lote
            </Typography>
            <br/>
            <ToggleButtonGroup
              value={selectedType}
              exclusive
              onChange={handleTypeChange}
              aria-label="Tipo de lote"
              fullWidth
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <ToggleButton 
                value="Unifamiliares" 
                sx={{ 
                  width: '50%', 
                  border: '1px solid', 
                  fontWeight: 'bold', 
                  transition: 'all 0.3s ease-in-out',
                  '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: '#DCA65E',
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  },
                }}
              >
                Unifamiliares
              </ToggleButton>
              <ToggleButton 
                value="Multifamiliares" 
                sx={{ 
                  width: '50%', 
                  border: '1px solid', 
                  fontWeight: 'bold', 
                  transition: 'all 0.3s ease-in-out',
                  '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: '#DCA65E',
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  },
                }}
              >
                Multifamiliares
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Grid>

        {/* Lista de imágenes a la derecha */}
        <Grid size={{ xs: 12, sm: 8 }}>
          <Box 
            sx={{ 
              height: 'auto', 
              maxHeight: 800, 
              border: '1px solid #ccc', 
              boxShadow: '0 8px 16px rgba(0,0,0,0.1)', 
              borderRadius: 4, 
              display: 'flex', 
              justifyContent: 'center', 
              p: { xs: 2, md: 4 }, 
              bgcolor: 'background.paper' 
            }}
          >
            <Box sx={{ width: { xs: '100%', sm: '80%' }, mb: 5 }}>
              <CarruselFotos images={selectedType === 'Unifamiliares' ? imagesUnifamiliares : imagesMultifamiliares} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FilterComponent;
