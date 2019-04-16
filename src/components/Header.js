import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  CardMedia,
  Button
} from '@material-ui/core/';
import { getMovies } from '../actions/moviesActions';
import logo from './../accets/logo.svg';

const styles = {
  root: {
    display: 'flex',
    margin: '0 auto',
    flexGrow: 1
  },
  toolbar: {
    backgroundColor: 'black'
  },
  grow: {
    flexGrow: 1
  },
  container: {
    display: 'flex',
    margin: '0 auto',
    justifyContent: 'center',
    paddingTop: '4rem'
  },
  media: {
    width: 81,
    height: 72,
    margin: '1rem'
  }
};

class Header extends Component {
  handleClick() {
    // console.log('click and props: ', this.props);
    this.props.getMovies();
  }
  render() {
    const { classes, items } = this.props;
    console.log('render: ', items);
    return (
      <AppBar position="fixed" color="primary">
        <div className={classes.toolbar}>
          <Toolbar>
            <CardMedia className={classes.media} image={logo} title="Logo" />
            <div className={classes.grow} />
            <Typography variant="h6" color="inherit">
              Sort by
            </Typography>
            <div className={classes.grow} />
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              onClick={() => this.handleClick()}
            >
              Secondary
            </Button>
          </Toolbar>
        </div>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  items: state.movies.items
});

export default connect(
  mapStateToProps,
  { getMovies }
)(withStyles(styles)(Header));
