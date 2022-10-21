import { Grid, Typography, Box } from '@mui/material';
import { grey, teal } from '@mui/material/colors';
import { CardSkill } from './CardSkill';
import { MySkillsData } from '../data';

export const MySkills = () => {

  return (
    <Grid container display='flex' justifyContent='center' mt={14} mb={10}>
      <Grid item xs={12} className='px-5 py-5'>
        <Typography sx={{ fontSize: { xs: '2.125rem', xl: '3rem' } }} fontWeight='bold'>My Skills</Typography>
        <Typography sx={{ fontSize: { xs: '1rem', xl: '1.25rem' } }} fontWeight='bold' color={'secondary'}>What Skills I Have</Typography>
      </Grid>

      <Grid item xs={12} sm={6} display='flex' alignItems='center'>
        <Box className='p-10'>
          <Typography 
            variant='h5' 
            textAlign={'center'} 
            sx={{ mb: 3, fontSize: { xs: '1.75rem', xl: '2rem' } }} 
            fontWeight='bold' 
          >My creative <span style={{ color: teal[500] }}>skills</span> and <span style={{ color: teal[500] }}>experiences.</span></Typography>
          <Typography sx={{ mt: { xs: 0, xl: 4 }, fontSize: { xs: '1rem', xl: '1.25rem' } }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, reiciendis porro eum minus quam ex dolor nesciunt corporis atque architecto nam nobis id sit molestias impedit neque fugit eveniet dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora excepturi, quam aliquid non et est omnis minus aperiam quae error sint dolorum? Aliquid accusantium dolorem rem, blanditiis accusamus fuga laudantium!</Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={5} className='px-10' display='flex' flexDirection={'column'} alignItems='center' justifyContent='center'>
        <Grid container xs={12} spacing={2}>
          { MySkillsData.map( skill => <CardSkill {...skill}/>) }
        </Grid>
      </Grid>
    </Grid>
  )
}
