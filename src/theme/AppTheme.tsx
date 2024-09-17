import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { ReactNode } from 'react';
import { normalTheme } from './normalTheme';

interface AppThemeProps {
  children: ReactNode;
}

export const AppTheme: React.FC<AppThemeProps> = ({ children }) => {

  return (
    <ThemeProvider theme={ normalTheme }>
      <CssBaseline />
        { children }
    </ThemeProvider>
  )
}
