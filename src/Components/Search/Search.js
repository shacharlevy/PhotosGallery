
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    marginLeft:420,
    marginTop: 80,
    },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <React.Fragment className= 'Search'>
      <Paper component="form" className={classes.root} id='TextField'>
        <IconButton className={classes.iconButton} aria-label="menu">
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Search.."
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton color="primary" className={classes.iconButton} aria-label="directions">
          <SearchIcon />
        </IconButton>
      </Paper>
      </React.Fragment>
    
  );
}