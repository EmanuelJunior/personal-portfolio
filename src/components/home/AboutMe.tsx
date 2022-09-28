import { Download } from '@mui/icons-material';
import { useTheme, Grid, Typography, Box, CardMedia, Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import { themeValidation } from "./utils/themeValidation"

export const AboutMe = () => {

  const { palette:{ mode } } = useTheme();

  return (
    <Grid container  className={`global__font ${ themeValidation(mode) } `} display='flex' justifyContent='center'>
      <Grid item xs={12} className='px-5 py-5'>
        <Typography variant='h4' fontWeight='bold'>About Me</Typography>
        <Typography color='secondary' variant='body1' fontWeight='bold' marginBottom={2}>Frontend Developer</Typography>
      </Grid>

      <Grid item xs={12} sm={5} className='px-10'>
        <CardMedia
          component='img'
          image='/src/assets/img/AboutMe/profile.svg'
          alt='profile'
        />
      </Grid>

      <Grid item xs={12} sm={6} display='flex' alignItems='center'>
        <Box className='p-10'>
          <Typography variant='h5' textAlign={'center'} sx={{ mb: 3 }} fontWeight='bold' fontSize={27}>Who I am ?</Typography>
          <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, reiciendis porro eum minus quam ex dolor nesciunt corporis atque architecto nam nobis id sit molestias impedit neque fugit eveniet dignissimos!</Typography>
          <Typography marginTop={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora excepturi, quam aliquid non et est omnis minus aperiam quae error sint dolorum? Aliquid accusantium dolorem rem, blanditiis accusamus fuga laudantium!</Typography>
          <Button 
            fullWidth 
            variant='contained' 
            sx={{ mt: 5, fontWeight: 'bold' }}
            startIcon={ <Download/> }
          >
            Download Resume
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}
