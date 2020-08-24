import React, { Component } from "react";
import "./Todo.css";
class Todo extends Component {
  // constructor(props) {
  //   super(props);
  // }

  
  render() {
    return (
      <div>
        <div
          onClick={() => this.props.toggleItem(this.props.wholeTask.id)}
          className={`task-${this.props.wholeTask.completed ? "completed" : ""}`}
        >
          <h2>{this.props.wholeTask.name} </h2>
        </div>
      </div>
    );
  }
}

export default Todo;
