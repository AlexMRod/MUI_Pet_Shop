/*eslint-disable*/ 
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function AccordionExpandIcon({data}) {
  return (
    <div>
    {data.map((item, index) => (
      <Accordion key={index}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:'left'}}>
            {item.description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    ))}
    </div>
  );
}