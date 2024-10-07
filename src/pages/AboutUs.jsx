/* eslint-disable*/

import { Typography } from "@mui/material"
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import AccordionExpandIcon from "../components/Accordion"

const services = [
  { title: 'Pet Grooming', description: 'Full grooming services including baths, haircuts, nail trimming, and ear cleaning.' },
  { title: 'Pet Accomodation', description: 'Safe and comfortable accomodation for your pets while you are away.' },
  { title: 'Veterinary Checkups', description: 'Routine health checkups and vaccinations to keep your pet healthy.' },
  { title: 'Pet Training', description: 'Basic obedience and behavior training for dogs and other pets.' }
];
export default function AboutUs() {
  
  
  return (
   <>
   
   <Typography variant='h1' gutterBottom> About Us </Typography>
   
     
   <Box sx={{ width: '50em', margin:'auto'}}>
         <Typography variant='body1' gutterBottom>
      Welcome to Alex's Pet Shop, your one-stop destination for everything your pet needs! We are passionate animal lovers committed to bringing joy, health, and happiness to pets and their owners.
      </Typography>
       
    
    
      <Typography variant='body1' gutterBottom>
      More than just a store, we are a community that understands pets are family. From nutritious food and safe toys to grooming products and accessories, we provide high-quality items tailored to your pet's needs.
      </Typography>
    
    
    
      <Typography variant='body1' gutterBottom>
      Our friendly staff is always ready with personalized advice to help you find the best for your pet. We also support responsible pet ownership through adoption drives and pet care workshops.
      </Typography>
    
    
    
      <Typography variant='body1' gutterBottom>
      At Alex's Pet Shop, your pet’s well-being is our priority. Visit us in-store or online and let's make your pet’s life a little brighter together!
      </Typography>
      </Box>

      <Box sx={{ width: '50em', margin:'5em auto'}} >
      <Typography variant='h2' gutterBottom> Our Services</Typography>
        <AccordionExpandIcon data={services}/>
     
      </Box>
  
  
   </>

    
  )
}
