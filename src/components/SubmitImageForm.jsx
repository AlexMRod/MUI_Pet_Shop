/*eslint-disable*/
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import * as yup from "yup";
import { FormContainer, TextFieldElement, useForm } from "react-hook-form-mui"
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object()
  .shape({
    imageURL: yup.string().url().required('a URL is required')
  })
  .required();


export default function SubmitImageForm( {submitHandler} ) {

  const {
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    reset,
    control,
    formState,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues:{
      imageURL:''
    }
  });

  const dataSubmit = (data) => {submitHandler(data.imageURL);
  reset()
};

  return (
  <Box sx={{width:'50em', margin:'auto'}}> 
    <FormContainer
        onSuccess={handleSubmit(dataSubmit)} 
        sx={{ width: '40rem', margin: 'auto' }}
      >

    <InputLabel> Enter the image URL </InputLabel>
    <TextFieldElement control={control} name="imageURL" id="outlined-basic" fullWidth sx={{paddingBottom:'0.5em', display:'block'}}/>
    <Button variant="contained" type="submit" disabled={!isDirty || !isValid }>Add to Gallery</Button>
   </FormContainer>
   </Box>
  );
}
