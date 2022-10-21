import { Box, Grid, Typography } from '@mui/material';
import {teal} from '@mui/material/colors';

import { CardProject } from '.';
import { WorkExperienceData } from '../data';

export const ListProject = () => {

  return (
		<Grid container display='flex' justifyContent='center' alignItems='center' mt={14} mb={10} px={3}>
      <Grid item xs={12} className='px-3 py-5 pb-7'>
        <Typography sx={{ fontSize: { xs: '2.125rem', xl: '3rem' } }} fontWeight='bold'>My Projects</Typography>
        <Typography sx={{ fontSize: { xs: '1rem', xl: '1.25rem' } }} fontWeight='bold' color={'secondary'}>My recent work</Typography>
      </Grid>

      {
        WorkExperienceData.map( (data, i) => (
          <CardProject key={i} {...data}/>
        ))
      }
    </Grid>
  )
}
