import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from './Button';
import Category from './Category';
import { nanoid } from 'nanoid';


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

    const [categoryInput,setCategoryInput] = useState('');
    const [categories, setCategories] = useState([]);
    const classes = useStyles();

    const addCategory = () => {
        const copyOfCategories = [...categories];
        copyOfCategories.push({
            id: nanoid(),
            name: categoryInput
        })
        setCategories(copyOfCategories);
        console.log(categoryInput);
        console.log(categories);
    }

    const deleteChildCategory = (id) => {
        setCategories(categories.filter(category => category.id !== id));
    }

    return (
        <div>
            <Box display="flex" justifyContent="center" m={15} p={0} bgcolor="background.paper">
                <form className={classes.root} noValidate autoComplete="off">

                    <TextField
                        id="filled-basic"
                        label="Add new category"
                        variant="outlined"
                        size="medium"
                        onChange={event=> setCategoryInput(event.target.value)}
                    />
                    <Button
                        mr={2}
                        mb={15}
                        variant="contained"
                        color="primary"
                        onClick={addCategory}>
                            Add
                    </Button>
                </form>
            </Box>
            <Box>
                {categories.length > 0 ? categories.map(category => <Category category={category}   deleteFunctionFromFather={deleteChildCategory}/>) : ""}
            </Box>
        </div>);
}

export default RootCategory;