import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getTodos } from './actions/todos'
import Todos from './components/Todos/Todos';
import Form from './components/Form/Form';
import todos from './images/todo_check.png';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodos());
    }, [dispatch]);

    return (
        <Container maxidth='lg' >
            <AppBar className={classes.appBar} position="static" color="inherit" >
                <Typography variant="h2" align="center" className={classes.heading} >To-Do</Typography>
                <img src={todos} alt="todos" height="60" width="60" className={classes.image} />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Todos />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    )
}

export default App;