import { useContext } from 'react';

import { AppBar, Box, IconButton, Link, Toolbar, Button, Typography, Avatar } from '@mui/material';
import { GitHub, LinkedIn, Reddit, Menu, Close  } from '@mui/icons-material';

import { IUIContext, UIContext } from '../../context';
import { SocialMediaUrls } from './data/SocialMediaUrls';

export const NavBar = () => {

  const { gitHub, linkedIn, reddit } = SocialMediaUrls;
  const { openClose, setOpenClose } = useContext<IUIContext>( UIContext );
  
  return (
    <AppBar>
      <Toolbar className='animate__animated animate__fadeInDown'>
        <Box display='flex' alignItems='center' flex={1} sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <IconButton sx={{ mr: 1 }} onClick={ () => setOpenClose( true ) }>
            {
              openClose 
                ? <Close fontSize='large' className='animate__animated animate__bounceIn'/> 
                : <Menu fontSize='large' className='animate__animated animate__bounceIn'/>
            }
          </IconButton>
        </Box>

        <Box display='flex' alignItems='center' flex={1} sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <IconButton sx={{ mr: 1 }} color='primary'>
            <Avatar alt='EmanuelJunior' sx={{ width: 45, height: 45 }} src='/src/assets/img/emanuelJunior.jpeg'>A</Avatar>
          </IconButton>
          <Typography variant='h6' sx={{ ml: 2 }}>Emanuel Junior</Typography>
        </Box>

      <Box sx={{ display: { xs: 'none', sm: 'flex' } }} flex={1} justifyContent='center'>
        <Link>
          <Button>Experiencia</Button>
        </Link>
        <Link>
          <Button>Proyectos</Button>
        </Link>
        <Link>
          <Button>Contacto</Button>
        </Link>
      </Box>


      <Box 
        display={'flex'} 
        flex={1} justifyContent='end' 
        className={ `animate__animated ${ openClose ? 'animate__bounceOutUp' : 'animate__bounceInDown' }` }
      >
        <Link href={ gitHub.url } title={ gitHub.title } target='_blank'>
          <IconButton>
            <GitHub />
          </IconButton>
        </Link>

        <Link href={ linkedIn.url } title={ linkedIn.title } target='_blank'>
          <IconButton>
            <LinkedIn/>
          </IconButton>
        </Link>

        <Link href={ reddit.url } title={ reddit.title } target='_blank'>
          <IconButton>
            <Reddit />
          </IconButton>
        </Link>
      </Box>

      </Toolbar>

    </AppBar>
  )
}
