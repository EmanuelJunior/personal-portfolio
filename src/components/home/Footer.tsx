import { Box, Grid, Typography, Link, TextField, Button, IconButton, useTheme } from '@mui/material';
import { teal } from '@mui/material/colors';
import { GitHub, LinkedIn, Reddit, Send } from '@mui/icons-material';
import { SocialMediaUrls } from './data';

export const Footer = () => {

  const { gitHub, linkedIn, reddit } = SocialMediaUrls;
  const { palette:{ mode } } = useTheme();

  const themeBgColor: string = mode === 'dark' ? teal[600] : teal[200];
  const themeColor: string = mode === 'dark' ? teal[200] : teal[600];

  return (
    <Box sx={{ bgcolor: themeBgColor, mt: 10, pt: 5, px: 6 }} className='w-full shadow-2xl'>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <Typography variant='h5' fontWeight={'bold'} component='h2'>
              Portfolio Web
            </Typography>
            <Typography variant='subtitle1' fontWeight={'bold'} component='h5' color={ themeColor }>
              Web Developer
            </Typography>
            <Typography variant='subtitle2' mt={2}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem sint natus, quisquam sapiente dicta at voluptatum consectetur aspernatur nisi mollitia tenetur labore nam pariatur, quos, vitae temporibus soluta deleniti!</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box>
            <Typography variant='h5' fontWeight={'bold'} component='h2'>
              Links For Navigate
            </Typography>

            <Box mt={2} display='flex' flexDirection='column'>
              <Link fontWeight={'bold'} variant='subtitle1' href='http://google.com' color={ themeColor }>
                Home
              </Link>
              <Link fontWeight={'bold'} variant='subtitle1' href='http://google.com' color={ themeColor }>
                About Me
              </Link>
              <Link fontWeight={'bold'} variant='subtitle1' href='http://google.com' color={ themeColor }>
                My Skills
              </Link>
              <Link fontWeight={'bold'} variant='subtitle1' href='http://google.com' color={ themeColor }>
                Projects
              </Link>
              <Link fontWeight={'bold'} variant='subtitle1' href='http://google.com' color={ themeColor }>
                Contact
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Box>
            <Typography variant='h5' fontWeight={'bold'} component='h2' mb={3}>
              Contact Me
            </Typography>

            <Box display='flex' alignItems='center' flexDirection='column'>
              <TextField id="outlined-basic" label="Your Email" variant="outlined" size='small' fullWidth />
              <Button 
                fullWidth variant='contained' 
                size="large" sx={{ height: 40, mt: 2 }}
                startIcon={<Send/>}
              >Send Email
              </Button>
            </Box>
          </Box>
          <Box mt={4}>
            <Typography variant='h5' fontWeight={'bold'} component='h2' mt={3}>
              Main Social Networks
            </Typography>

            <Box mt={2} display='flex' flexDirection='column'>
              <Link href={ gitHub.url } title={ gitHub.title } target='_blank'>
                <IconButton >
                  <GitHub sx={{ fontSize: { xs: 24, xl: 31 } }}/>
                </IconButton>
                GitHub
              </Link>

              <Link href={ linkedIn.url } title={ linkedIn.title } target='_blank'>
                <IconButton>
                  <LinkedIn sx={{ fontSize: { xs: 24, xl: 31 } }}/>
                </IconButton>
                LinkedIn
              </Link>

              <Link href={ reddit.url } title={ reddit.title } target='_blank'>
                <IconButton>
                  <Reddit sx={{ fontSize: { xs: 24, xl: 31 } }}/>
                </IconButton>
                Reddit
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} mt={0}>
          <Box sx={{ py: 2, borderTop: `1px solid ${teal[500]}` }}>
            <Typography variant='subtitle2' component='h5' textAlign='center' color={themeColor} fontWeight='bold'>
              Designed and developed by EmanuelJunior @2022
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
