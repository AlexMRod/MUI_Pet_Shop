/*eslint-disable*/

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ShopCard from '../components/Card.jsx';

const cardData = [
  {
    imageURL:
      'https://images.unsplash.com/photo-1472491235688-bdc81a63246e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cats',
    description: 'Click here to see how much we love cats',
    path:'/cats'
  },
  {
    imageURL:
      'https://plus.unsplash.com/premium_photo-1676390051589-bead49b416a6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fHww',
    title: 'Dogs',
    description: 'Here you have a page about dogs with pictures',
    path:'/dogs',
  },
  {
    imageURL:
      'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Other Pets',
    description: 'We also care about other Pets, not just Cats and Dogs',
    path:'/otherpets'
  },
  {
    imageURL:
      'https://plus.unsplash.com/premium_photo-1661386072955-20fcc18e03d4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'About Us',
    description: 'Read more about our mission and services',
    path:'/aboutus'
  },
];
export default function Home() {
  return (
    <>
      <Box sx={{ 'margin-bottom': '3em' }}>
        <Typography variant="h1"> Welcome to Alex's Pet Shop</Typography>
      </Box>
      <Box sx={{ display:'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent:'center', gap:'1em'}}><ShopCard data={cardData}/></Box>
    </>
  );
}
