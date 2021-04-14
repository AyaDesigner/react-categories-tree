import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Button from './Button';
import { nanoid } from 'nanoid';





const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '60%',
        maxWidth: '30%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));




export default function Category({ category, deleteFunctionFromFather }) {
    const classes = useStyles();

    const [categoryName, setCategory] = useState(category.name);
    const [categoryChildren, setCategoryChildren] = useState([]);
    const [isEditable, setIsEditable] = useState(false);


    const addChildCategory = () => {
        const copyOfCategoriesChildren = [...categoryChildren];
        copyOfCategoriesChildren.push({
            id: nanoid(),
            name: ""
        });
        setCategoryChildren(copyOfCategoriesChildren);
    }

    const editChildCategory = () => {
        setIsEditable(true);
        
    }

    const saveChildCategory = () => {
        setIsEditable(false);
    }

    const deleteChildCategory = (id) => {
        setCategoryChildren(categoryChildren.filter(category => category.id !== id));
    }


    return (
        
        <Box display="flex" justifyContent="center" m={1} p={0} bgcolor="background.paper">
            <div className={classes.root}>

                {isEditable ?
                    <TextField
                        id="filled-basic"
                        variant="outlined"
                        value={categoryName}
                        size="medium"
                        fullWidth
                        onChange={event => setCategory(event.target.value)}
                    />
                    :
                    <Accordion>
                        <AccordionSummary>
                            <Typography className={classes.heading}>{categoryName}</Typography>
                        </AccordionSummary>
                    </Accordion>
                }

                {categoryChildren.map(categoryChild => <Category category={categoryChild} deleteFunctionFromFather={deleteChildCategory}/>)}

            </div>
            <Box>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<AddCircleIcon />}
                    onClick={addChildCategory}
                    mr={1}
                    ml={1}
                    m={1}
                    p={1}>
                    Add child category
                </Button>

                {isEditable ? 
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<CheckCircleIcon />}
                    p={1}
                    onClick={saveChildCategory}
                >
                    Save
                </Button>
                    :
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<EditIcon />}
                        p={1}
                        onClick={editChildCategory}
                    >
                        Edit
                </Button>}
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    p={1}
                    ml={1}
                    onClick={()=> deleteFunctionFromFather(category.id)}

                >
                    Delete
                </Button>
            </Box>
        </Box>

    );
}