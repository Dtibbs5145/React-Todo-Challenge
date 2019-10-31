import React from 'react';

const Todo = (props) => {
    return (
        <div
            className={props.task.completed ? ' completed' : ' '}
            onClick={() => props.toggleTask(props.task.id)}
        >
            {props.task.task}
        </div>
    );
};

export default Todo;