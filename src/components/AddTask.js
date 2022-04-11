import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { storeTasksDataAction } from '../redux/actions/TaskAction';
import { useDispatch } from 'react-redux';

const AddTask = (props) => {
    const dispatch = useDispatch();
    const { handleClose, initializeData, setShow } = props;
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("");

    const changeTitle = (e) => {
        setTitle(e.target.value);
        console.log(title);
    }
    const changePriority = (e) => {
        setPriority(e.target.value);
        console.log(priority);
    }
    const saveTask = async () => {
        if (title.length === 0 || priority === "") {
            alert("Please enter each value");
            return false;
        }

        const newSingleTask =
        {
            Title: title,
            Priority: priority
        };

        dispatch(storeTasksDataAction(newSingleTask));
        setShow(false);

    }
    return (
        <>

            <Modal.Header closeButton>
                <Modal.Title>Add Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Task Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter task title"
                            value={title} onChange={changeTitle}
                            autoFocus
                        />
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3"
                        controlId="formPlaintextPassword"
                    >
                        <Form.Label column sm="4">
                            Priority
                        </Form.Label>
                        <Col sm="6">
                            <select className='form-control' style={{ appearance: "revert" }} required onChange={changePriority}>
                                <option value={''}>Please select Priority</option>
                                <option value={'High'}>High</option>
                                <option value={'Low'}>Low</option>
                                <option value={'Medium'}>Medium</option>

                            </select>
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button variant="secondary" onClick={handleClose}>
                    Close
                </button>
                <button variant="primary" onClick={saveTask}  >
                    Save Changes
                </button>
            </Modal.Footer>

        </>
    );
}

export default AddTask;