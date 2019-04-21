import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core';
import { Year, Genres, Search } from '.';
import {
  setYear,
  setGenre,
  getMovies,
  getMoviesFilters
} from './../actions/moviesActions';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing.unit * 3
    }
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    minWidth: 100,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    }
  }
}))(InputBase);

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  }
});

class SortPanel extends Component {
  state = {
    year: 2018,
    genre: ''
  };

  handleChangeYear = () => event => {
    const {
      activePage,
      activeGenre,
      setYear,
      getMovies,
      getMoviesFilters
    } = this.props;
    setYear(event.target.value);

    if (activeGenre) {
      getMoviesFilters(activePage, event.target.value, activeGenre);
    } else {
      getMovies(activePage, event.target.value);
    }
  };

  handleChangeGenre = () => event => {
    const { activePage, activeYear, setGenre, getMoviesFilters } = this.props;
    setGenre(event.target.value);
    getMoviesFilters(activePage, activeYear, event.target.value);
  };

  render() {
    const { classes, activeYear, activeGenre } = this.props;
    const years = [];
    let startYear = 2012;
    let endYear = 2019;
    for (let i = 0; i <= endYear - startYear; i++) {
      years[i] = endYear - i;
    }
    let genres = [
      { id: 28, name: 'Action' },
      { id: 16, name: 'Animation' },
      { id: 35, name: 'Comedy' },
      { id: 99, name: 'Documentary' },
      { id: 18, name: 'Drama' },
      { id: 14, name: 'Fantasy' },
      { id: 27, name: 'Horror' },
      { id: 53, name: 'Thriller' }
    ];

    return (
      <form className={classes.root} autoComplete="off">
        <Year
          BootstrapInput={BootstrapInput}
          years={years}
          handleChange={this.handleChangeYear}
          activeYear={activeYear}
        />
        <Genres
          BootstrapInput={BootstrapInput}
          genres={genres}
          handleChange={this.handleChangeGenre}
          activeGenre={activeGenre}
        />
        <Search />
      </form>
    );
  }
}

SortPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  activePage: PropTypes.number.isRequired,
  activeYear: PropTypes.number.isRequired,
  activeGenre: PropTypes.number.isRequired,
  setYear: PropTypes.func.isRequired,
  setGenre: PropTypes.func.isRequired,
  getMovies: PropTypes.func.isRequired,
  getMoviesFilters: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  activePage: state.movies.activePage,
  activeYear: state.movies.year,
  activeGenre: state.movies.activeGenre
});

export default connect(
  mapStateToProps,
  { setYear, setGenre, getMovies, getMoviesFilters }
)(withStyles(styles)(SortPanel));
