/* eslint-disable */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


export default function ShopCard({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <Card key={index} sx={{ width: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={item.imageURL} 
              sx={{objectFit:'cover'}} 
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title} 
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}
