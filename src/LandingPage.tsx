import { AboutMe, Contact, Header, MySkills, NavBar, Projects, SideMenu } from "./components/home/";
import { Box, IconButton } from '@mui/material';
import { DarkMode, LightMode, Translate } from "@mui/icons-material";
import { useContext } from 'react';
import { UIContext } from "./context";
import { amber, blue, teal } from '@mui/material/colors';

export const LandingPage = () => {

  const { ui, setUi } = useContext(UIContext);

  const changeModes = () => {
    const darkOrLight = ui.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', darkOrLight );
    console.log( localStorage.getItem('theme') );
    setUi({ ...ui, theme: darkOrLight });
  }

  return (
    <>
      <NavBar />
      <SideMenu />
      
      <Header/>
      <AboutMe/>
      {/* <MySkills/> */}
      {/* <Projects/> */}
      <Contact/>

      <Box sx={{ position: 'fixed', bottom: 0}}>
        <IconButton 
          onClick={ changeModes } 
          sx={{ color: ui.theme === 'light' ? '#fff' : '#222'}}
          size='large'
        >
          { ui.theme === 'light' ? <LightMode fontSize="large"/> : <DarkMode fontSize="large"/> }
        </IconButton>
        <IconButton sx={{ color: blue[900], position: 'fixed', right: 0 }} size='large'>
          <Translate fontSize="large"/>
        </IconButton>
      </Box>
    </>
  );
};
