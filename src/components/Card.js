import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, Divider } from '@material-ui/core/';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 483,
    height: 278,
    display: 'flex',
    margin: '1rem'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: 298
  },
  content: {
    flex: '1 0 auto'
  },
  media: {
    width: 185,
    height: 278
  }
};

function MediaCard(props) {
  const { classes, title, overview, release_date, poster_path } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h6" style={{ lineHeight: 1.2 }}>
            {title}
          </Typography>
          <Typography gutterBottom variant="subtitle1" color="textSecondary">
            {release_date}
          </Typography>
          <Typography
            component="p"
            style={{ overflow: 'hidden', maxHeight: 100 }}
          >
            {overview}
          </Typography>
        </CardContent>
        <Divider />
        <CardActions>
          <Button size="small" color="inherit">
            More info
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
