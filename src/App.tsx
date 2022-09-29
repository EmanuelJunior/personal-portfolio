import { useState, useEffect } from 'react';
import { CssBaseline, ThemeProvider, useTheme } from '@mui/material';

import { IUi, UIContext } from './context/';
import { LightTheme, DarkTheme } from './themes/';
import { LandingPage } from './LandingPage';


function App() {

  const { palette:{ mode } } = useTheme();

  const [ui, setUi] = useState<IUi>({
    openClose: false,
    theme: localStorage.getItem('theme') as 'light' | 'dark' || 'dark'
  });

  const modes = localStorage.getItem('theme') || ui.theme;

  return (
    <UIContext.Provider value={{ ui, setUi }}>
      <ThemeProvider theme={ modes === 'dark' ? DarkTheme : LightTheme }>
        <CssBaseline/>
        <LandingPage/>
      </ThemeProvider>
    </UIContext.Provider>
  )
}

export default App
