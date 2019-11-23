import React, { Component } from 'react'; 
import './Backlog.css';

class TaskDescription extends Component {
  render () {
    const { taskInfo } = this.props;
    return (
      <div className="taskDescription">
        {taskInfo && taskInfo.name}
      </div>
  )};
}

export default TaskDescription;
