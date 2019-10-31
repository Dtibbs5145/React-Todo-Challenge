import React from 'react';
import './components/TodoComponents/Todo.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const ChoreData = [
  {
    task: 'Finish Project',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Make dinner',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Watch the Shining',
    id: Date.now(),
    completed: false
  }
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: 'Hit MVP',
      chore: ChoreData
    };
  };

  toggleTask = id => {
    this.setState({
      chore: this.state.chore.map(task => {
        if (task.id === id) {
          return {
            ...task, completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      chore: [...this.state.chore, newTask]
    });
  };

  clearCompleted = () => {
    this.setState({
      chore: this.state.chore.filter(task => !task.completed)
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='all'>
        <h1>Todo List</h1>
        <TodoForm addTask={this.addTask}/>
        <TodoList chore={this.state.chore} toggleTask={this.toggleTask} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
