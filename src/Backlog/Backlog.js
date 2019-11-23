import React, { Component } from 'react'; 
import './Backlog.css';

import TaskList from './TaskList';
import TaskDescription from './TaskDescription';

class Backlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: null
        }
        this.handleClickTaskCreator = this.handleClickTaskCreator.bind(this); 
    }

    handleClickTaskCreator(task) {
        return this.handleClickTask.bind(this, task)
    }

    handleClickTask(task) {
        console.log(task)
        this.setState({
            task
        })
    }

    render () {
        const { task } = this.state;
        return (
            <div className="backlog">
                <TaskList onClickTask={this.handleClickTaskCreator} />
                <TaskDescription taskInfo={task}/>
            </div>
    )};
}

export default Backlog;
