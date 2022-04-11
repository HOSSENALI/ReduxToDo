import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap'
import Layout from '../components/layouts/Layout';
import TaskLists from './TaskLists';
import AddTask from '../components/AddTask';
import { getTasksData, storeTaskData } from '../service/TaskService';
import axios from 'axios';
import CounterComponent from '../components/counter/CounterComponent';
import TestCounterHit from '../components/counter/TestCounterHit';



function TaskListPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    initializeData();
  }, []);

  const initializeData = async () => {

    //getting data from API data from TaskService.js file.................
    const tasksData = await getTasksData();
    tasksData.sort();
    tasksData.reverse();

    setTasks(tasksData);
  }

  //saving data with API..........................
  const onSubmitSaveTask = async (newTask) => {
    const isAdded = await storeTaskData(newTask);
    if (isAdded) {
      initializeData();
    }
    setShow(false);
  }
  return (
    <>
      <Layout>
        <TestCounterHit />
        <CounterComponent />

        <Modal
          show={show}
          onHide={handleClose}
          animation={true}
          centered
        >
          <AddTask handleClose={handleClose} onSubmit={onSubmitSaveTask} />
        </Modal>
        <TaskLists tasks={tasks} handleShow={handleShow} />

      </Layout>
    </>
  );
}

export default TaskListPage;
