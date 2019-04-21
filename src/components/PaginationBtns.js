import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {
  getMovies,
  getMoviesFilters,
  setActivePage
} from '../actions/moviesActions';
import Button from '@material-ui/core/Button';

const styles = {
  root: { marginBottom: '2rem' },
  button: {
    minWidth: '40px'
  },
  active: {
    minWidth: '40px',
    fontSize: '1rem'
  }
};

const Pagination = props => {
  const {
    getMovies,
    getMoviesFilters,
    setActivePage,
    activePage,
    activeYear,
    activeGenre,
    pages,
    classes
  } = props;

  const goTo = page => {
    setActivePage(page);

    if (activeGenre) {
      getMoviesFilters(page, activeYear, activeGenre);
    } else {
      getMovies(page, activeYear);
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className={classes.root}>
      <Button
        size="small"
        className={classes.button}
        disabled={activePage === 1}
        component={Link}
        to={`/page/${1}`}
        onClick={() => goTo(1)}
      >
        &laquo;
      </Button>
      <Button
        size="small"
        className={classes.button}
        disabled={activePage === 1}
        component={Link}
        to={`/page/${activePage - 1}`}
        onClick={() => goTo(activePage - 1)}
      >
        Previous
      </Button>
      <Button className={classes.active} size="large">
        {activePage}
      </Button>
      <Button
        size="small"
        className={classes.button}
        disabled={activePage === activePage + 1}
        component={Link}
        to={`/page/${activePage + 1}`}
        onClick={() => goTo(activePage + 1)}
      >
        Next
      </Button>
      <Button
        size="small"
        className={classes.button}
        disabled={activePage === pages}
        component={Link}
        to={`/page/${pages}`}
        onClick={() => goTo(pages)}
      >
        &raquo;
      </Button>
    </div>
  );
};

Pagination.propTypes = {
  items: PropTypes.array.isRequired,
  activePage: PropTypes.number.isRequired,
  activeYear: PropTypes.number.isRequired,
  activeGenre: PropTypes.number.isRequired,
  getMovies: PropTypes.func.isRequired,
  getMoviesFilters: PropTypes.func.isRequired,
  setActivePage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  items: state.movies.itemsOnPage,
  pages: state.movies.pages,
  activePage: state.movies.activePage,
  activeYear: state.movies.year,
  activeGenre: state.movies.activeGenre
});

export default connect(
  mapStateToProps,
  { getMovies, getMoviesFilters, setActivePage }
)(withStyles(styles)(Pagination));
