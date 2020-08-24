import React, {Component} from 'react';

class TodoForm extends Component {
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
        <input type='text' name='newTask' value={this.state.newTask} onChange={this.handleChanges}/><button>Add Task</button>
      </form>
    );
  }
}





export default TodoForm;