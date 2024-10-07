import { Box, Typography } from "@mui/material"

export default function NotFound() {
  return (
    
    <Box sx={{width:"80em", margin:"auto"}}>
    <Typography variant='h1' gutterBottom sx={{fontSize:'4em', paddingBottom:"1em"}}> Sorry, there's nothing here </Typography>
    <img src='https://http.cat/404.jpg' width='500px' className='error' />
    </Box>
  )
}
