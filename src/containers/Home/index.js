import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import heroImage from '../../hero.jpg';

const useStyles = makeStyles(theme => ({
  imageContainer: {
    textAlign: 'center',
  },
  image: {
    height: 350,
  },
}));

const HomePage = props => {
  const classes = useStyles();
  return (
    <Box className={classes.imageContainer} marginY={4} marginX={10}>
      <img className={classes.image} src={heroImage} alt="heroImage" />    
      <Box className={classes.imageContainer} mt={4}>
        <Typography variant="h5">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
