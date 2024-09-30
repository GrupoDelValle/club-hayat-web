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

export const CustomRoundedButton: React.FC<CustomRoundedButtonProps> = ({width, style, padding = '20px 20px', background='white', boxShadow = 'inset 5px 5px 10px rgba(0, 0, 0, 0.5)'  , children, selected = false, className, onClick, ...props}) => {

  return (
      <Button
        style={style}
        sx={{ 
          width: width<600 ? '75%' : '70%',
          m:'auto',
          display:'flex-start',
          marginTop:'5%',
          padding: padding,
          background: background,
          borderRadius: '30px',
          boxShadow: boxShadow,
          height: '30px',
          "&.MuiButtonBase-root:hover": { 
            backgroundColor: "primary.light",
          },
        }}
        className={className}
        onClick={onClick}
        {...props}
      >
        {children}
      </Button>
  );
};