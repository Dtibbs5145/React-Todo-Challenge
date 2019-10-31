import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            {props.chore.map(task => {
                return (
                    <Todo
                        toggleTask={props.toggleTask}
                        task={task}
                    />
                )
            })}
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    );

}

export default TodoList;