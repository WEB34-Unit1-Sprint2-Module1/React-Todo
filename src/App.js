import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import tasks from "./tasks";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      TodoList: tasks
    };
  }

  toggleItem = (clickedTask) => {
    console.log('clickedTask', clickedTask);
    const newTodoList = this.state.TodoList.map((task) => {
      if (task.id === clickedTask) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });
    this.setState({ TodoList: newTodoList });
  };

  addNewTask = (taskText) => {
    const newTask = {
      name: taskText,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      TodoList: [...this.state.TodoList, newTask],
    });
  };

  filter = () => {
    this.setState({
      TodoList: this.state.TodoList.filter(task => !task.completed)
    })
  }

  render() {
    console.log(this.state.TodoList);

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewTask={this.addNewTask} />
        <TodoList tasks={this.state.TodoList} toggleItem={this.toggleItem} filter={this.filter} />
      </div>
    );
  }
}

export default App;
