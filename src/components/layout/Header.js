import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, CardMedia } from '@material-ui/core/';
import {
  setActivePage,
  setGenre,
  setYear,
  getMovies
} from '../../actions/moviesActions';
import logo from './../../accets/logo.svg';

const styles = {
  toolbar: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  media: {
    width: 60,
    height: 53,
    margin: '.5rem'
  },
  marginLeft: {
    marginLeft: 30
  }
};

const Header = props => {
  const { classes } = props;

  const handleClick = () => {
    const { setActivePage, setGenre, setYear, getMovies } = props;
    setActivePage(1);
    setGenre(0);
    setYear(2018);
    getMovies(1, 2018);
    window.scrollTo(0, 0);
  };

  return (
    <AppBar position="fixed" color="primary">
      <div className={classes.toolbar}>
        <Toolbar>
          <Link to={'/'} onClick={handleClick}>
            <CardMedia className={classes.media} image={logo} title="Logo" />
          </Link>

          <div className={classes.marginLeft}>
            <Typography variant="h5" color="inherit">
              Discover New Movies
            </Typography>
          </div>
        </Toolbar>
      </div>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  setYear: PropTypes.func.isRequired,
  setGenre: PropTypes.func.isRequired,
  setActivePage: PropTypes.func.isRequired,
  getMovies: PropTypes.func.isRequired
};

export default connect(
  null,
  { setActivePage, setGenre, setYear, getMovies }
)(withStyles(styles)(Header));
