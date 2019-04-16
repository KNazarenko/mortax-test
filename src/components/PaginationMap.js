import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getMovies } from './../actions/moviesActions';
import Button from '@material-ui/core/Button';

const styles = {
  root: { marginBottom: '2rem' },
  button: {
    minWidth: '40px'
  }
};

const Pagination = ({ getMovies, pages, classes, history }) => {
  const goTo = page => {
    getMovies(page);
    // window.scrollTo(0, 0);
    // history.push('/');
  };

  let pageNumbers = [];
  for (let i = 0; i < 10; i++) {
    pageNumbers[i] = i + 1;
  }
  console.log('number of pages: ', pageNumbers);

  return (
    <div className={classes.root}>
      {pageNumbers.map(number => (
        <Button
          key={number}
          className={classes.button}
          component={Link}
          to={`/page/${number}`}
          onClick={() => goTo(number)}
        >
          {number}
        </Button>
      ))}
      {/* <Button
        className={classes.button}
        component={Link}
        to={`/page/${pageTwo}`}
        onClick={() => goTo(pageTwo)}
      >
        {pageTwo}
      </Button> */}

      {/* <Button onClick={() => goTo(pageOne)}>{pageOne}</Button>
      <Button onClick={() => goTo(pageTwo)}>{pageTwo}</Button>
      <Button onClick={() => goTo(pageThree)}>{pageThree}</Button> */}
    </div>
  );
};

export default connect(
  null,
  { getMovies }
)(withStyles(styles)(Pagination));
