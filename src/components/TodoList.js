// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.tasks.map((task) => (
          <Todo
            key={task.id}
            wholeTask={task}
            toggleItem={this.props.toggleItem}
          />
        ))}
        <button onClick={this.props.filter}>Clear Finished</button>
      </div>
    );
  }
}

export default TodoList;
