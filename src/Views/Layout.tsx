import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import CreateTaskForm from '../Components/TaskList/CreateTaskForm';
import { setShow } from '../features/tasks/GlobalSlice';
import TaskCardInfo from '../Components/TaskList/TaskCardInfo';

const Layout = () => {
    const dispatch = useDispatch()
    let location = window.location.href.substring(22);
    function generateLink() {
        if (location === 'archived') {
            return (<a href="tododone" className='color-w'>Go to Tasks</a>)
        } else if (location === 'tododone') {
            return (<a href="archived">Go to Archived</a>)
        }
    } 
    
  return (
    <div>
    <Button className='m-3' variant="success">
    {generateLink()}
    </Button>
    <Button className='m-3' variant="success" onClick={e => (dispatch(setShow(true)))}>
        Create New Task
    </Button>
    <CreateTaskForm />
    <TaskCardInfo />
    </div>
  )
}

export default Layout