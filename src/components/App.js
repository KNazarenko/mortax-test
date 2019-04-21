import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core/';
import { getMovies, setActivePage } from './../actions/moviesActions';
import { Footer, Header, Main, Pagination } from '.';

const styles = {
  root: {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    width: '100%',
    flexGrow: 1
  }
};

class App extends Component {
  componentDidMount() {
    const { activePage, activeYear } = this.props;
    this.props.getMovies(activePage, activeYear);
  }

  render() {
    const { classes, items } = this.props;
    console.log('render: ', items);
    return (
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/page/:id" component={Main} />
          </Switch>
          <Pagination />
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  items: state.movies.itemsOnPage,
  activePage: state.movies.activePage,
  activeYear: state.movies.year
});

App.propTypes = {
  items: PropTypes.array.isRequired,
  activePage: PropTypes.number.isRequired,
  activeYear: PropTypes.number.isRequired,
  getMovies: PropTypes.func.isRequired,
  setActivePage: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getMovies, setActivePage }
)(withStyles(styles)(App));
