import { Box, Fab, IconButton } from '@mui/material';
import { LightMode, DarkMode, Translate } from '@mui/icons-material';
import { blue } from '@mui/material/colors';
import { useContext } from 'react';
import { UIContext } from '../../context';
import { changeTheme } from './utils/changeTheme';

export const ChangeModeLanguage = () => {
  
  const { ui, setUi } = useContext(UIContext);

  return (
    <Box sx={{ position: 'fixed', bottom: 5, left: 5}}>
      <Fab 
        onClick={ () => changeTheme({ ui, setUi }) } 
        size='medium'
        color='info'
      >
        { ui.theme === 'light' ? <LightMode fontSize="medium"/> : <DarkMode fontSize="medium"/> }
      </Fab>
      <Fab sx={{ position: 'fixed', right: 5, bottom: 5 }} size='medium' color='info'>
        <Translate fontSize="medium"/>
      </Fab>
    </Box>
  )
}
