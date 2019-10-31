import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chores: ''
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.task);
    };

    render() {
        return (
            <form onSubmit={this.submitTask}>
                <input
                    type='text'
                    value={this.chores}
                    name='task'
                    onChange={this.handleChanges}
                />
                <button>Add Task</button>
            </form>
        );
    }
}

export default TodoForm;