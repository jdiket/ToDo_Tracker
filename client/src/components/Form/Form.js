import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux';

import useStyles from './style';
import { createTodo } from '../../actions/todos';

const Form = () => {
    const [todoData, setTodoData] = useState({
        creator: '', title: '', description: '', tags: '', selectedFile: ''
    });
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createTodo(todoData))
    }

    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">Creating a To-Do Item</Typography>
            <TextField 
                name="creator" 
                variant="outlined" 
                label="Creator" 
                fullWidth 
                value={todoData.creator} 
                onChange={(e) => setTodoData({ ...todoData, creator: e.target.value })} 
            />
            <TextField 
                name="title" 
                variant="outlined" 
                label="Title" 
                fullWidth 
                value={todoData.title} 
                onChange={(e) => setTodoData({ ...todoData, title: e.target.value })} 
            />
            <TextField 
                name="description" 
                variant="outlined" 
                label="Description" 
                fullWidth 
                value={todoData.description} 
                onChange={(e) => setTodoData({ ...todoData, description: e.target.value })} 
            />
            <TextField 
                name="tags" 
                variant="outlined" 
                label="Tags" 
                fullWidth 
                value={todoData.tags} 
                onChange={(e) => setTodoData({ ...todoData, tags: e.target.value })} 
            />
            <div className={classes.fileinput}>
                <FileBase 
                    type="file" 
                    multiple={false} 
                    onDone={({base64}) => setTodoData({ ...todoData, selectedFile: base64 })} 
                />
            </div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >
                Submit
            </Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth >
                clear
            </Button>
            </form>
        </Paper>
    );
}

export default Form;