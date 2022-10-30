import { AboutMe, ChangeModeLanguage, Contact, Header, MySkills, Footer } from "./components/home/";
import { NavBar, SideMenu } from "./components/ui";
import { Box, useTheme } from '@mui/material';
import { themeValidation } from "./components/home/utils";
import { ListProject } from "./components/home/projects";

export const LandingPage = () => {

  const { palette:{ mode } } = useTheme();

  return (
    <Box className={`${ themeValidation( mode ) } global__font`}>
      <NavBar />
      <SideMenu />
      
      <Header/>
      <AboutMe/>
      <MySkills/>
      <ListProject/>
      <Contact/>
      <ChangeModeLanguage/>
      <Footer/>
    </Box>
  );
};
