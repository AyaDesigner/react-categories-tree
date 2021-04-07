import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        height: '7ch',
      },
    },
  }));
  

const RootCategory = () => {

    const classes = useStyles();

    return ( 
    <div>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Add new category" variant="outlined" />
            <Button variant="contained">Add</Button>
        </form>

    </div> );
}
 
export default RootCategory;