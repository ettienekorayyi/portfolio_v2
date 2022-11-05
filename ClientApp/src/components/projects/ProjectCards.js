import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ProjectCards = ({ photo,url, title, description }) => {
  const handler = () => window.open(url, '_blank');

  return (
    <Card sx={{ maxWidth: 345, marginTop: '5%' }} >
      <CardActionArea onClick={handler}>
        <CardMedia
          component="img"
          height="140 "
          image={photo}
          sx={{ backgroundColor: 'black', }}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCards;