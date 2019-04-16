import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core/';
import MediaCard from './Card';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    flexGrow: 1,
    width: '100%'
  },
  grow: {
    flexGrow: 1
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
    padding: '2rem'
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    justifyContent: 'center'
  }
};

class Main extends Component {
  render() {
    const { classes, items } = this.props;
    return (
      <div className={classes.root} elevation={1}>
        <Grid item xl={8} lg={10} md={12} className={classes.container}>
          <div className={classes.main}>
            <Typography
              variant="h4"
              gutterBottom
              style={{ textAlign: 'center' }}
            >
              Discover New Movies
            </Typography>
            <div className={classes.cards}>
              {items.map(item => (
                <MediaCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.movies.itemsOnPage
});

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(Main));
