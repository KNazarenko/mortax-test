import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core/';
import logo from './../../accets/logo.svg';
import footer from './../../accets/footer.jpg';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    backgroundImage: `url(${footer})`,
    backgroundSize: 'cover',
    height: 200
  },
  media: {
    width: 140,
    height: 124,
    marginRight: '6rem',
    alignSelf: 'center'
  }
};

const Footer = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <CardMedia className={classes.media} image={logo} title="Logo" />
    </div>
  );
};

export default withStyles(styles)(Footer);
