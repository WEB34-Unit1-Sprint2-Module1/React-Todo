import React, {Component} from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.task} </h2>
      </div>
    );
  }
}

export default Todo;