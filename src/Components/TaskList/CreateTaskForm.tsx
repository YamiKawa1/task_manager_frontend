import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { StateInfoObject } from '../../interface';
import { postCreateTask, patchUpdateTask } from '../../API';

interface Props {
  loading: any;
  show:boolean;
  setShow:any;
  stateInfo: StateInfoObject;
}

function CreateTaskForm({ loading, show, setShow, stateInfo }: Props): JSX.Element {

  const handleClose = () => {
    setShow(false);
    stateInfo.setTitle('');
    stateInfo.setInfo('');
    stateInfo.setDate('');
    stateInfo.setComplexity('');
  }

  const createTask = async (e: any) => {
    e.preventDefault();
    const body = {
      title: stateInfo.title,
      information: stateInfo.info,
      task_date: stateInfo.date,
      complexity: stateInfo.complexity,
    };
    const res = await postCreateTask(body);
    console.log(res);
    handleClose();

    loading();
  };

  const editTask = async (e: any) => {
    e.preventDefault();

    const body = {
      title: stateInfo.title,
      information: stateInfo.info,
      task_date: stateInfo.date,
      complexity: stateInfo.complexity,
    };

    const res = await patchUpdateTask(stateInfo.id, body);
    console.log(res);
    handleClose();

    loading();
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Creating New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form method="post">
            <Form.Control
              onChange={(e) => stateInfo.setTitle(e.target.value)}
              name="title"
              type="text"
              placeholder="Title"
              value={stateInfo.title}
            />
            <br />
            <Form.Control
              onChange={(e) => stateInfo.setInfo(e.target.value)}
              name="info"
              as="textarea"
              type="text"
              placeholder="Information"
              value={stateInfo.info}
            />
            <br />
            <Form.Label>Day to complete the task</Form.Label>
            <Form.Control
              onChange={(e) => stateInfo.setDate(e.target.value)}
              name="date"
              type="date"
              placeholder=""
              value={stateInfo.date}
            />
            <br />
            <Form.Select
              onChange={(e) => stateInfo.setComplexity(e.target.value)}
              name="complexity"
              aria-label="Default select example"
              value={stateInfo.complexity}
            >
              <option>How difficult is this task</option>
              <option value="facil">Facil</option>
              <option value="medio">Medio</option>
              <option value="dificil">Dificil</option>
            </Form.Select>
            <br />
            <Button variant="primary" onClick={(e) => {
              return stateInfo.edit ? editTask(e) : createTask(e)
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
