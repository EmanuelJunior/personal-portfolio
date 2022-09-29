import { useContext } from 'react';

import { AppBar, Box, IconButton, Link, Toolbar, Button, Typography, Avatar } from '@mui/material';
import { GitHub, LinkedIn, Reddit, Menu, Close  } from '@mui/icons-material';

import { IUIContext, UIContext } from '../../context';
import { SocialMediaUrls } from './data/SocialMediaUrls';

export const NavBar = () => {

  const { gitHub, linkedIn, reddit } = SocialMediaUrls;
  const { ui, setUi } = useContext<IUIContext>( UIContext );

  return (
    <AppBar>
      <Toolbar className='animate__animated animate__fadeInDown'>
        <Box display='flex' alignItems='center' flex={1} sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <IconButton sx={{ mr: 1 }} onClick={ () => setUi({ ...ui, openClose: true }) }>
            {
              ui.openClose 
                ? <Close fontSize='large' className='animate__animated animate__bounceIn'/> 
                : <Menu fontSize='large' className='animate__animated animate__bounceIn'/>
            }
          </IconButton>
        </Box>

        <Box display='flex' alignItems='center' flex={1} sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <IconButton sx={{ mr: 1 }} color='primary'>
            <Avatar alt='EmanuelJunior' sx={{ width: { xs: 45, xl: 55 }, height: { xs: 45, xl: 55 } }} src='/src/assets/img/emanuelJunior.jpeg'>A</Avatar>
          </IconButton>
          <Typography variant='h6' sx={{ ml: 2, fontSize: { xs: '1.25rem', xl: '1.5rem' } }}>Emanuel Junior</Typography>
        </Box>

      <Box sx={{ display: { xs: 'none', sm: 'flex' } }} flex={1} justifyContent='center'>
        <Link>
          <Button>Experience</Button>
        </Link>
        <Link>
          <Button>Projects</Button>
        </Link>
        <Link>
          <Button>Contact</Button>
        </Link>
      </Box>

      <Box 
        display={'flex'} 
        flex={1} justifyContent='end' 
        className={ `animate__animated ${ ui.openClose ? 'animate__bounceOutUp' : 'animate__bounceInDown' }` }
      >
        <Link href={ gitHub.url } title={ gitHub.title } target='_blank'>
          <IconButton>
            <GitHub sx={{ fontSize: { xs: 24, xl: 31 } }}/>
          </IconButton>
        </Link>

        <Link href={ linkedIn.url } title={ linkedIn.title } target='_blank'>
          <IconButton>
            <LinkedIn sx={{ fontSize: { xs: 24, xl: 31 } }}/>
          </IconButton>
        </Link>

        <Link href={ reddit.url } title={ reddit.title } target='_blank'>
          <IconButton>
            <Reddit sx={{ fontSize: { xs: 24, xl: 31 } }}/>
          </IconButton>
        </Link>
      </Box>

      </Toolbar>

    </AppBar>
  )
}
