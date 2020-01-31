import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import profileImage from '../../hi.jpg';
import Link from '../../components/Link';
import { ROUTES } from '../../constant';

const user = {
  firstName: 'first name',
  lastName: 'last name',
  address: 'address',
  phoneNumber: '7452145254',
  email: 'abc@yopmaic.com',
  dateOfBirth: '22/45/4441',
};

const useStyles = makeStyles({
  profileImage: {
    width: '154px',
    height: '154px',
    margin: 'auto',
  },
  image: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  descText: {
    display: 'flex',
    fontWeight: 'normal',
    justifyContent: 'space-between',
  },
});

const Profile = () => {
  const classes = useStyles();

  return (
    <Box m={4}>
      <Grid container justify="center">
        <Grid item md={6} xs={12}>
          <Card>
            <Box p={4} className={classes.wrapper}>
              <Grid container>
                <Grid item sm={4} xs={12}>
                  <div className={classes.image}>
                    <Avatar alt="Remy Sharp" src={profileImage} className={classes.profileImage} />
                    <Button variant="outlined" className={classes.link}>
                      <Link color="textPrimary" to={ROUTES.EDIT_PROFILE}>
                        Edit Profile
                    </Link>
                    </Button>
                  </div>
                </Grid>
                <Grid item sm={8} xs={12}>
                  <Hidden mdUp>
                    <Box pt={2} />
                  </Hidden>
                  <Typography variant="button" className={classes.descText}>
                    <b>Name:</b> {user.firstName} {user.lastName}
                  </Typography>
                  <br />
                  <Typography variant="button" className={classes.descText}>
                    <b>Email:</b> {user.email}
                  </Typography>
                  <br />
                  <Typography variant="button" className={classes.descText}>
                    <b>Adress:</b> {user.address}
                  </Typography>
                  <br />
                  <Typography variant="button" className={classes.descText}>
                    <b>Phone Number:</b> {user.phoneNumber}
                  </Typography>
                  <br />
                  <Typography variant="button" className={classes.descText}>
                    <b>Date of Birth: </b> {user.dateOfBirth}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
