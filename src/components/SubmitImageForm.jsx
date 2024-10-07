import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { FormGroup } from '@mui/material';

export default function SubmitImageForm() {
  return (
   <FormGroup sx={{width: "40rem", margin:"auto"}}>
    <InputLabel> Enter the image URL </InputLabel>
    <TextField id="outlined-basic" sx={{paddingBottom:'0.5em'}}/>
    <Button variant="contained">Add to Gallery</Button>
   </FormGroup>
  );
}