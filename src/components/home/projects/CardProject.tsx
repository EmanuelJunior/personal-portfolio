import { Grid, Typography, Card, CardHeader, Avatar, CardMedia, CardContent, CardActions, Button, Link, Chip, Box, Stack } from '@mui/material';
import { GitHub, Web } from '@mui/icons-material';
import { teal } from '@mui/material/colors';
import { FC } from 'react';

interface Props {
  title: string;
  date: string;
  description: string;
  image: string;
  github: string;
  website: string;
  tags: string[];
}

export const CardProject: FC<Props> = ({ title, date, description, image, github, website, tags }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} display='flex' alignItems='center'>
      <Card sx={{ m: 1 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: teal[500] }} aria-label="recipe" src={ image }>
              P
            </Avatar>
          }
          title={ title }
          subheader={ date }
        />
        <CardMedia
          component="img"
          height="195"
          image={ image }
          alt="Paella dish"
        />
        <CardContent>
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            { tags.map( tag => <Chip label={ tag } variant="outlined" color='secondary' key={ tag }/> ) }
          </Stack>

          <Typography variant="body2" color="text.secondary">
            { description }
          </Typography>
        </CardContent>

        <CardActions sx={{ px: 2, pb: 2 }}>
          <Link href={ github } target='_blank'>
            <Button size="medium" variant='outlined' startIcon={<GitHub/>}>GitHub</Button>
          </Link>
          
          <Link href={ website } target='_blank'>
            <Button size="medium" variant='contained' startIcon={<Web/>}>Live Demo</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}
