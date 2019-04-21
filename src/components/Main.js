import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import { MediaCard, SortPanel } from '.';

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
