import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import tasks from './tasks';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      TodoList: tasks
    }
  }

  addNewTask = taskText => {
    const newTask = {
      task: taskText,
      id: Date.now(),
      completed: false
    }
    this.setState({
      TodoList: [...this.state.TodoList, newTask]
    });
  };

  render() {
    console.log(this.state.TodoList)

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewTask={this.addNewTask} />
        <TodoList />
      </div>
    );
  }
}

export default App;
