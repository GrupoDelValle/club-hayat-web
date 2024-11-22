import React from 'react';
import { Grid, Card, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { expCards } from '../config/expCards';

const Overlay = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  opacity: 0,
  transition: 'opacity 0.5s ease',
}));

const CardContainer = styled(Card)(() => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '25px',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.26)',
  '&:hover .overlay': {
    opacity: 1,
  },
}));

const CardImage = styled(CardMedia)(() => ({
  width: '100%',
  height: 0,
  paddingTop: '56.25%', // Aspect ratio 16:9
  backgroundSize: 'cover',
  transition: 'transform 0.5s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export const GridPhotos = () => {
  return (
    <Grid container spacing={2} sx={{ width: '100%', margin: '0 auto', padding: 2 }}>
      {expCards.slice(0, 6).map((expCard, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <CardContainer>
            <CardImage
              image={expCard.image}
              style={{ backgroundPosition: expCard.position }}
            />
            <Overlay className="overlay">
              <Typography variant="h5">{expCard.title}</Typography>
              <Typography variant="subtitle1">Hayat Club Punta Sal</Typography>
            </Overlay>
          </CardContainer>
        </Grid>
      ))}
    </Grid>
  );
};
