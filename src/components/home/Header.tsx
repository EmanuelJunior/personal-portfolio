import { Box, Grid, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";

export const Header = () => {

  return (
    <Grid
      sx={{ mt: "60px", height: 'auto' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={`px-10 overflow-y-hidden`}
      container
    >
      <Grid item xs={12} sm={7} className='flex justify-center items-center' sx={{ mt: { xs: 2, sm: 0 } }}>
        <Box>
          <Typography sx={{ fontSize: { xs: '1.25rem', xl: '1.5rem' } }} fontWeight='bold' color={ teal[200] }>Hello, I'm</Typography>
          <Typography sx={{ fontSize: { xs: '3rem', xl: '3.75rem' } }}>Emanuel Garcés</Typography>
          <Typography sx={{ fontSize: { xs: '1.5rem', xl: '2.125rem' } }} color={ teal[500] }>Frontend Developer</Typography>
          
          {/* <Typography variant='subtitle1'>"If you can imagine it you can program it" <span className='font-bold' style={{ color: teal[300] }}>ProgramacionATS</span> </Typography> */}
        </Box>
      </Grid>
      <Grid item xs={12} sm={5} className='flex justify-center items-center'>
        <div className='header__img w-full'></div>
      </Grid>
    </Grid>
  );
};
