import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo/Todo';

import useStyles from './style';

const Todos = () => {
    const todos = useSelector((state) => state.todos);
    const classes = useStyles();

    console.log(todos);

    return (
        <>
            <h1>TODOS</h1>
            <Todo />
            <Todo />
        </>
    );
}

export default Todos;