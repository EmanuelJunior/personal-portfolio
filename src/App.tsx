import { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { UIContext } from './context/';
import { LightTheme, DarkTheme } from './themes/';
import { LandingPage } from './LandingPage';

function App() {

  const [openClose, setOpenClose] = useState(false);

  return (
    <UIContext.Provider value={{ openClose, setOpenClose }}>
      <ThemeProvider theme={ LightTheme }>
        <CssBaseline/>
        <LandingPage/>
      </ThemeProvider>
    </UIContext.Provider>
  )
}

export default App
