import { Typography } from '@mui/material';
import ImageGrid from '../components/ImageGrid';
import SubmitImageForm from '../components/submitImageForm';
import Box from '@mui/material/Box';

export default function PetsPage() {
  const petImages = [
    'https://images.unsplash.com/photo-1425082661705-1834bfd09dca',
    'https://images.unsplash.com/photo-1551148408-9b3cc5e1add6',
    'https://images.unsplash.com/photo-1652536122320-ca870caea2ae',
    'https://images.unsplash.com/photo-1701708844217-3b32c0d8bd03?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <>
      <Box sx={{ marginBottom: '3em' }}>
        <Typography variant="h1" gutterBottom>
          {' '}
          Featured Pets
        </Typography>
        <ImageGrid images={petImages} />
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
