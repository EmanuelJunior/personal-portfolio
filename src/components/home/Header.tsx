import { Box, Grid, Typography, useTheme } from "@mui/material";
import { teal } from "@mui/material/colors";
import { themeValidation } from "./utils/themeValidation";

export const Header = () => {

  const { palette:{ mode } } = useTheme();

  return (
    <Grid
      sx={{ mt: "60px", height: 'auto' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={`global__font ${ themeValidation( mode ) } px-10 overflow-y-hidden`}
      container
    >
      <Grid item xs={12} sm={7} className='flex justify-center items-center' sx={{ mt: { xs: 2, sm: 0 } }}>
        <Box>
          <Typography variant='h6' fontWeight='bold' color={ teal[200] }>Hello, I'm</Typography>
          <Typography variant='h3'>Emanuel Garcés</Typography>
          <Typography variant='h5' color={ teal[500] }>Frontend Developer</Typography>
          
          {/* <Typography variant='subtitle1'>"If you can imagine it you can program it" <span className='font-bold' style={{ color: teal[300] }}>ProgramacionATS</span> </Typography> */}
        </Box>
      </Grid>
      <Grid item xs={12} sm={5} className='flex justify-center items-center'>
        <div className='header__img w-full'></div>
      </Grid>
    </Grid>
  );
};
