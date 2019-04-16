import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core/';
import logo from './../accets/logo.svg';
import footer from './../accets/footer.jpg';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    backgroundImage: `url(${footer})`,
    padding: '1rem',
    color: 'white',
    height: 400
  },
  media: {
    width: 181,
    height: 160,
    marginRight: '10rem',
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
