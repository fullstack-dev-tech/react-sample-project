import React from 'react';
import { Image } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import profileImage from '../../hi.jpg';

const useStyles = makeStyles(theme => ({
  image: {
    width: '54px',
    height: '54px',
    display: 'table',
    margin: '0 auto',
  }
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.image}>
        <Image className="img-fluid" src={profileImage} roundedCircle />
      </div>
    </div>
  )
}

export default Profile;
