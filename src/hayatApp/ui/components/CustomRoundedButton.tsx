import React from 'react';
import { Button } from '@mui/material';
import '../css/CustomRoundedButton.css';

interface CustomRoundedButtonProps {
    children: React.ReactNode;
    selected?: boolean;
    boxShadow?: string;
    background: string;
    padding?: string;
    className: string;
    width: number;
    style?: any;
    onClick?: () => void;
}

export const CustomRoundedButton: React.FC<CustomRoundedButtonProps> = ({
  width,
  style,
  padding = '20px 20px',
  background = 'transparent', // Fondo transparente
  boxShadow = 'none', // Sin sombras
  children,
  selected = false, // Indica si está seleccionado
  className,
  onClick,
  ...props
}) => {
return (
  <Button
    style={style}
    sx={{ 
      width: width < 600 ? '75%' : '70%',
      m: 'auto',
      padding: padding,
      background: background,
      border: 'none', // Sin bordes
      borderRadius: '100px', // Sin bordes redondeados
      color: selected ? '#E96417' : 'white', // Color de texto
      position: 'relative',
      "&.MuiButtonBase-root:hover": { 
        background: 'none', // Mantener el fondo transparente en hover
        color: '#E96417', // Cambiar color en hover
      },
      "&::before, &::after": {
        content: '""',
        position: 'absolute',
        width: selected ? '100%' : '0', // Mostrar líneas cuando está seleccionado
        height: '2px',
        backgroundColor: '#E96417', // Color de las líneas
        transition: 'width 0.3s ease',
      },
      "&::before": {
        top: 0, // Línea superior
        left: 0,
      },
      "&::after": {
        bottom: 0, // Línea inferior
        left: 0,
      },
      "&.selected::before, &.selected::after": {
        width: '100%', // Líneas visibles si está seleccionado
      }
    }}
    className={`${className} ${selected ? 'selected' : ''}`} // Añadir clase 'selected'
    onClick={onClick}
    {...props}
  >
    {children}
  </Button>
);
};
