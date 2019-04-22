import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import { MediaCard, SortPanel, Pagination } from '.';
import { getMovies } from './../actions/moviesActions';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    flexGrow: 1,
    width: '100%'
  },
  container: {
    display: 'flex',
    margin: '0 auto',
    justifyContent: 'center',
    paddingTop: '6rem'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 4rem'
  },
  sortPanel: {
    display: 'flex',
    margin: '0 auto',
    justifyContent: 'center'
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    marginTop: '1.5rem',
    justifyContent: 'center'
  }
};

class Main extends Component {
  componentDidMount() {
    const { activePage, activeYear } = this.props;
    this.props.getMovies(activePage, activeYear);
  }

  render() {
    const { classes, items } = this.props;

    return (
      <div className={classes.root} elevation={1}>
        <Grid item xl={10} className={classes.container}>
          <div className={classes.main}>
            <div className={classes.sortPanel}>
              <SortPanel />
            </div>
            <div className={classes.cards}>
              {items.map(item => (
                <MediaCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </Grid>
        <Pagination />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.movies.itemsOnPage,
  activePage: state.movies.activePage,
  activeYear: state.movies.year
});

Main.propTypes = {
  items: PropTypes.array.isRequired,
  activePage: PropTypes.number.isRequired,
  activeYear: PropTypes.number.isRequired,
  getMovies: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getMovies }
)(withStyles(styles)(Main));
