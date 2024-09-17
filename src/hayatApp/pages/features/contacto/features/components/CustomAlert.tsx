import React, { useState, useEffect } from 'react';
import { Snackbar, Alert as MuiAlert, Slide, SlideProps, AlertTitle } from '@mui/material';

interface AlertProps{
    title: string;
    message: string;
    severity: 'success' | 'error' | 'warning' | 'info';
    duration: number;
    onClose: ()=>void
}

const SlideTransition: React.FC<SlideProps> = ({...props}) => {
    return <Slide {...props} direction="up" />;
}

export const Alert:React.FC<AlertProps>  = ({title,  message, severity = 'success', duration = 3000, onClose }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <Snackbar
      TransitionComponent={SlideTransition}
      open={open}
      autoHideDuration={duration}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <MuiAlert onClose={() => setOpen(false)} severity={severity} sx={{ width: '100%' }}>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};
