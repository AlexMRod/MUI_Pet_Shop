import { Typography } from '@mui/material';
import ImageGrid from '../components/ImageGrid';
import SubmitImageForm from '../components/submitImageForm';
import Box from '@mui/material/Box';

export default function CatPage() {
  const catImages = [
    'https://images.unsplash.com/photo-1501820488136-72669149e0d4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1664299749481-ac8dc8b49754?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1472491235688-bdc81a63246e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1677545183884-421157b2da02?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1677545182067-26ac518ef64f?q=80&w=2756&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <>
      <Box sx={{ marginBottom: '3em' }}>
        <Typography variant="h1" gutterBottom>
          {' '}
          Featured Cats
        </Typography>
        <ImageGrid images={catImages} />
      </Box>
      <Box>
        <Typography variant="h3" gutterBottom>
          {' '}
          Add your cat here
        </Typography>
        <SubmitImageForm />
      </Box>
    </>
  );
}
