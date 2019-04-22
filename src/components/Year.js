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

const Year = props => {
  const { classes, BootstrapInput, handleChange, years, activeYear } = props;

  return (
    <FormControl className={classes.form}>
      <div className={classes.name}>
        <Typography variant="button" color="inherit">
          Year
        </Typography>
      </div>
      <Select
        value={activeYear}
        onChange={handleChange()}
        input={<BootstrapInput name="year" />}
      >
        <MenuItem value={0}>
          <em>None</em>
        </MenuItem>

        {years.map(year => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

Year.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Year);
