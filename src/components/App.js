import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core/';
import { Footer, Header, Main, Error } from '.';

const styles = {
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  content: {
    flex: '1 0 auto'
  },
  footer: {
    flex: '0 0 auto'
  }
};

const App = props => {
  const { classes } = props;

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <div className={classes.content}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/page/:id" component={Main} />
            <Route component={Error} />
          </Switch>
        </div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
