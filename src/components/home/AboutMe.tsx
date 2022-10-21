import { Download, PeopleAltOutlined, MilitaryTech, FolderSpecial, FolderSpecialOutlined, PeopleAlt } from '@mui/icons-material';
import { Grid, Typography, Box, CardMedia, Button, Card, CardHeader, CardContent, CardActionArea } from '@mui/material';
import { DataForCardsAboutMe } from './data';
import { CardAboutMe } from './cards/CardAboutMe';

export const AboutMe = () => {



  return (
    <Grid container display='flex' justifyContent='center'>
      <Grid item xs={12} className='px-5 py-5'>
        <Typography sx={{ fontSize: { xs: '2.125rem', xl: '3rem' } }} fontWeight='bold'>About Me</Typography>
        
        <Typography 
          color='secondary' 
          fontWeight='bold' 
          marginBottom={2}
          sx={{ fontSize: { xs: '1rem', xl: '1.25rem' } }}
        >Frontend Developer</Typography>
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
          <Typography 
            variant='h5' 
            textAlign={'center'} 
            sx={{ mb: 3, fontSize: { xs: '1.75rem', xl: '2rem' } }} 
            fontWeight='bold' 
          >Who I am ?</Typography>

          <Grid container spacing={2} mb={3} display='flex' justifyContent={'center'}>
            { DataForCardsAboutMe.map( data => ( <CardAboutMe { ...data } key={ data.title }/> )) }
          </Grid>

          <Typography sx={{ mt: { xs: 0, xl: 4 }, fontSize: { xs: '1rem', xl: '1.25rem' } }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, reiciendis porro eum minus quam ex dolor nesciunt corporis atque architecto nam nobis id sit molestias impedit neque fugit eveniet dignissimos!</Typography>
          <Typography sx={{ fontSize: { xs: '1rem', xl: '1.25rem' } }} marginTop={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora excepturi, quam aliquid non et est omnis minus aperiam quae error sint dolorum? Aliquid accusantium dolorem rem, blanditiis accusamus fuga laudantium!</Typography>
          <Button 
            fullWidth 
            variant='contained' 
            sx={{ mt: 5, fontWeight: 'bold', fontSize: { xl: '1.1rem' } }}
            startIcon={ <Download/> }
          >
            Download Curriculum
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}
