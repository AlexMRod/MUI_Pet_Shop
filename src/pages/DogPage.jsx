/*eslint-disable*/

import { Typography } from '@mui/material';
import ImageGrid from '../components/ImageGrid';
import SubmitImageForm from '../components/SubmitImageForm';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function DogPage() {
  const dogImages = [
    'https://plus.unsplash.com/premium_photo-1676390051589-bead49b416a6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fHww',
    'https://plus.unsplash.com/premium_photo-1666777247416-ee7a95235559?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8fDB8fHww',
    'https://plus.unsplash.com/premium_photo-1666878155781-f86514e5808b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9nfGVufDB8fDB8fHww',
  ];

  const [images, updateImages] = useState(dogImages)

  const addImage = (newImageURL) => {
    updateImages((prevImages) => [...prevImages, newImageURL]); 
  };

  return (
    <>
      <Box sx={{ marginBottom: '3em' }}>
        <Typography variant="h1" gutterBottom>
          {' '}
          Featured Dogs
        </Typography>
        <ImageGrid images={images} />
      </Box>
      <Box>
        <Typography variant="h3" gutterBottom>
          Add your dog here
        </Typography>
        <SubmitImageForm submitHandler={addImage} />
      </Box>
    </>
  );
}
