import React, { Component } from 'react'; 
import './Backlog.css';
import { Table } from 'reactstrap';

class TaskList extends Component {
  render () {
    const list = [
        {
            id: 2,
            name: "Carl"
        },{
            id: 2,
            name: "Carl"
        },{
            id: 2,
            name: "Carl"
        },{
            id: 2,
            name: "Carl"
        },{
            id: 2,
            name: "Carl"
        },{
            id: 2,
            name: "Carl"
        },{
            id: 2,
            name: "Carl"
        },{
            id: 41,
            name: "Jesse"
        },{
            id: 26,
            name: "Paige"
        },{
            id: 48,
            name: "Harry"
        },{
            id: 14,
            name: "Eddie"
        },{
            id: 32,
            name: "Keith"
        },{
            id: 22,
            name: "Emma"
        },{
            id: 26,
            name: "Alan"
        },{
            id: 33,
            name: "Martin"
        },{
            id: 49,
            name: "Helen"
        }
    ];

    return (
      <div className="taskList">
        <Table>
            <tbody>
                {list.map(({id, name}, index) =>
                    <tr onClick={this.props.onClickTask({id, name})}> 
                        <td className='indexTask'>{index}</td>
                        <td className='nameTask'>{name}</td>
                    </tr>
                )}
            </tbody>
        </Table>
      </div>
  )};
}

export default TaskList;
