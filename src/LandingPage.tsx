import { AboutMe, ChangeModeLanguage, Contact, Header, MySkills } from "./components/home/";
import { NavBar, SideMenu } from "./components/ui";
import { Box, useTheme } from '@mui/material';
import { themeValidation } from "./components/home/utils";

export const LandingPage = () => {

  const { palette:{ mode } } = useTheme();

  return (
    <Box className={`${ themeValidation( mode ) } global__font`}>
      <NavBar />
      <SideMenu />
      
      <Header/>
      <AboutMe/>
      <MySkills/>
      {/* <Projects/> */}
      <Contact/>
      <ChangeModeLanguage/>
    </Box>
  );
};
