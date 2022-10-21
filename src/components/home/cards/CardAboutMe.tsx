import { Card, Grid, CardActionArea, CardContent, Typography } from '@mui/material';
import { FC } from 'react';
import { IDataForCardsAboutMe } from '../data/DataForCardsAboutMe';

interface Props extends IDataForCardsAboutMe {}

export const CardAboutMe: FC<Props> = ({ icon, title, description }) => {
  return (
    <Grid item xs={4} sm={6} md={4}>
      <Card>
        <CardActionArea>
          <CardContent>
            { icon }
            <Typography variant='h6' textAlign='center' fontWeight='bold' mt={2}>{ title }</Typography>
            <Typography variant='body2' textAlign='center' color={'#999'}>{ description }</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
