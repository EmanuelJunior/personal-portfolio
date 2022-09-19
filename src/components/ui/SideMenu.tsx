import { useContext, useEffect } from 'react';

import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Avatar, Typography, useMediaQuery, Link } from '@mui/material';
import { WorkHistoryOutlined, ConnectWithoutContactOutlined, Web, GitHub, LinkedIn, Reddit } from '@mui/icons-material';

import { UIContext } from '../../context';
import { toggleDrawer } from './utils/toggleDrawer';
import { DarkTheme, LightTheme } from '../../themes';
import { SocialMediaUrls } from './data/SocialMediaUrls';

export const SideMenu = () => {

  const { gitHub, linkedIn, reddit } = SocialMediaUrls;
  const { openClose, setOpenClose } = useContext( UIContext );
  
  const matches = useMediaQuery(
    DarkTheme.breakpoints.up('sm') 
    || LightTheme.breakpoints.up('sm')
  );

  useEffect(() => { matches && setOpenClose( false ) }, [matches, setOpenClose]);

  return (
    <Drawer 
      anchor='bottom' open={ openClose } 
      onClose={ toggleDrawer( false, setOpenClose ) }
      sx={{ backdropFilter: "blur(2px)", transition: "all 0.5s ease-out" }}
    >
      <List sx={{ borderTop: '1px solid #333' }}>
        <ListItem sx={{ my: 2}}>
          <ListItemIcon>
            <Avatar alt='EmanuelJunior' sx={{ width: 56, height: 56 }} src='/src/assets/img/emanuelJunior.jpeg'>A</Avatar>
          </ListItemIcon>
          <Typography sx={{ ml: 2 }} variant='h6'>Emanuel Junior</Typography>
        </ListItem>

        <Divider/>

        <ListItem button>
          <ListItemIcon>
            <WorkHistoryOutlined />
          </ListItemIcon>
          <ListItemText primary={"Experiencia"} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <Web fontSize='medium'/>
          </ListItemIcon>
          <ListItemText primary={"Proyectos"} />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <ConnectWithoutContactOutlined />
          </ListItemIcon>
          <ListItemText primary={"Contacto"} />
        </ListItem>

        <Divider sx={{ my: 3 }}/>

        <Link href={ gitHub.url } target='_blank' title={ gitHub.title }>
          <ListItem button>
            <ListItemIcon>
              <GitHub />
            </ListItemIcon>
            <ListItemText primary={"GitHub"} />
          </ListItem>
        </Link>

        <Link href={ linkedIn.url } target='_blank' title={ linkedIn.title }>
          <ListItem button>
            <ListItemIcon>
              <LinkedIn />
            </ListItemIcon>
            <ListItemText primary={"LinkedIn"} />
          </ListItem>
        </Link>

        <Link href={ reddit.url } target='_blank' title={ reddit.title }>
          <ListItem button>
            <ListItemIcon>
              <Reddit />
            </ListItemIcon>
            <ListItemText primary={"Reddit"} />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  )
}
