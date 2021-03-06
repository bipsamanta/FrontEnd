import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

const DatePickers = props => {
  const { classes, input } = props;

  return (
    <TextField
      id="date"
      label="Birthday"
      type="date"
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
      {...input}
    />
  );
};

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);
