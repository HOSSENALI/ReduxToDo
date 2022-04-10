import React from 'react'
import {Table} from 'react-bootstrap'
const TaskLists = (props) => {
    const { tasks, handleShow } = props;
    return (<>
        <div>
            <div style={{ float: "left" }}>
                <h2>User Lists</h2>
            </div>


            <div className='float-right'>
                <button className="btn btn-success" onClick={handleShow} >+ Add Task</button>
            </div>
        </div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Task Id</th>
                    <th>Task Title</th>
                    <th>Priority</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{task._id}</td>
                        <td>{task.Title}</td>
                        <td>{task.Priority}</td>
                        <td>
                            <span><i className='fa fa-pencil text-success pointer mr-2'> Edit Task</i></span>
                            <span> <i className='fa fa-trash text-danger pointer ml-2'> Delete Task</i></span>
                        </td>
                    </tr>
                ))}



            </tbody>
        </Table>
    </>
    );
}

export default TaskLists;