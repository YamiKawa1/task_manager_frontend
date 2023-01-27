import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../../features/tasks/TaskSlice';
import { setId, setComplexity, setDate, setTitle, setInfo, setShow, setEdit } from '../../features/tasks/GlobalSlice'
import type { RootState } from '../../app/store'
import uuid from 'react-uuid';

function CreateTaskForm(): JSX.Element {
  const globalState = useSelector((state: RootState) => state.global.value);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setId(''));
    dispatch(setTitle(''));
    dispatch(setInfo(''));
    dispatch(setDate(''));
    dispatch(setComplexity(''));
    dispatch(setShow(false));
    dispatch(setEdit(false));
  }

  const createTask = async (e: any) => {
    const body = {
      id: uuid(),
      title: globalState.title,
      information: globalState.info,
      task_date: globalState.date,
      complexity: globalState.complexity,
      done: false,
      archived: false
    };
    
    dispatch(addTask(body))
    
    handleClose();
  };

  const changeTask = async (e: any) => {

    const body = {
      id: globalState.id || '',
      title: globalState.title,
      information: globalState.info,
      task_date: globalState.date,
      complexity: globalState.complexity,
    };

    dispatch(editTask(body))

    handleClose();

    // loading();
  }
  return (
    <div>
      <Modal show={globalState.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Creating New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form method="post">
            <Form.Control
              onChange={(e) => dispatch(setTitle(e.target.value))}
              name="title"
              type="text"
              placeholder="Title"
              value={globalState.title}
            />
            <br />
            <Form.Control
              onChange={(e) => dispatch(setInfo(e.target.value))}
              name="info"
              as="textarea"
              type="text"
              placeholder="Information"
              value={globalState.info}
            />
            <br />
            <Form.Label>Day to complete the task</Form.Label>
            <Form.Control
              onChange={(e) => dispatch(setDate(e.target.value))}
              name="date"
              type="date"
              placeholder=""
              value={globalState.date}
            />
            <br />
            <Form.Select
              onChange={(e) => dispatch(setComplexity(e.target.value))}
              name="complexity"
              aria-label="Default select example"
              value={globalState.complexity}
            >
              <option>How difficult is this task</option>
              <option value="facil">Facil</option>
              <option value="medio">Medio</option>
              <option value="dificil">Dificil</option>
            </Form.Select>
            <br />
            <Button variant="primary" onClick={(e) => {
              return globalState.edit ? changeTask(e) : createTask(e)
            }}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateTaskForm;
