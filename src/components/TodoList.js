// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, {Component} from 'react';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      newTask: '',
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewTask(this.state.newTask);
    this.setState({ newTask: '' });
  };
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='newTask' value={this.setState.newTask} onChange={this.handleChanges}/><button>Add Task</button>
      </form>
    );
  }
}

export default TodoList;