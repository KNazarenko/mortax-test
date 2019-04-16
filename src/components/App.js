import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core/';
import { getMovies } from './../actions/moviesActions';
import Header from './Header';
import Main from './Main';
import Pagination from './PaginationMap';
import Footer from './Footer';

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
    this.props.getMovies();
    // window.scrollTo(0, 0);
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
  items: state.movies.items
});

export default connect(
  mapStateToProps,
  { getMovies }
)(withStyles(styles)(App));
