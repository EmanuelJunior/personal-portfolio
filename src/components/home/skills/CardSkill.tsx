import { Grid, CardActionArea, LinearProgress, Card, CardContent, Avatar, Typography, Box } from '@mui/material';
import { FC } from 'react';

interface Props {
  title: string;
  url: string;
  level: string;
  progress: number;
}

export const CardSkill: FC<Props> = ({ title, url, level, progress }) => {
  return (
    <Grid item xs={12} md={6} pb={0}>
      <Card>
        <CardActionArea>
          <CardContent sx={{ display: 'flex' }}>
            <Avatar
              src={ url }
            />
            <Box ml={2} sx={{ width: '100%'}}>
              <Typography variant='subtitle1' fontWeight='semibold'>{ title }</Typography>
              <Typography variant='subtitle2' fontWeight='semibold' color={'#888'}>{ level }</Typography>
              <LinearProgress
                color='secondary'
                variant="determinate"
                sx={{ mt: 1, borderRadius: 5, height: 10 }}
                value={progress}
              />
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
