// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.tasks.map(task => (
          <Todo key={task.id} task={task.task}/>
        ))}
      </div>
    );
  }
}

export default TodoList;