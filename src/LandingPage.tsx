import { AboutMe, Contact, Header, MySkills, NavBar, Projects, SideMenu } from "./components/home/";

export const LandingPage = () => {
  return (
    <>
      <NavBar />
      <SideMenu />
      
      <Header/>
      <AboutMe/>
      {/* <MySkills/> */}
      {/* <Projects/> */}
      <Contact/>
    </>
  );
};
