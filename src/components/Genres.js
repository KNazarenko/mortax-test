import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MenuItem, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  form: {
    margin: theme.spacing.unit
  },
  name: {
    marginBottom: '.5rem'
  }
});

const Genres = props => {
  const { classes, BootstrapInput, handleChange, genres, activeGenre } = props;

  return (
    <FormControl className={classes.form}>
      <div className={classes.name}>
        <Typography variant="button" color="inherit">
          Genres
        </Typography>
      </div>
      <Select
        value={activeGenre}
        onChange={handleChange()}
        input={<BootstrapInput name="genre" />}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        {genres.map(genre => (
          <MenuItem key={genre.id} value={genre.id}>
            {genre.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

Genres.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Genres);
