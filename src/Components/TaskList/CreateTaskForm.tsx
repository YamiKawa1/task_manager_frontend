import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { postCreateTask } from '../../API';

interface Props {
  loading: any;
}

function CreateTaskForm({ loading }: Props): JSX.Element {
  const [show, setShow] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [info, setInfo] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [complexity, setComplexity] = useState<string>('');
  const [done, setDone] = useState<boolean>(false);
  const [archived, setArchived] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createTask = async (e: any) => {
    e.preventDefault();
    const body = {
      title: title,
      information: info,
      task_date: date,
      complexity: complexity,
      done: done,
      archived: archived,
    };
    let response = await postCreateTask(body);
    // alert(response.data.data.message);
    console.log(response);
    handleClose();
    setTitle('');
    setInfo('');
    setDate('');
    setComplexity('');
    setDone(false);
    setArchived(false);
    loading();
  };

  return (
    <div>
      <Button variant="success" onClick={handleShow}>
        Create New Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Creating New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form method="post">
            <Form.Control
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              type="text"
              placeholder="Title"
              value={title}
            />
            <br />
            <Form.Control
              onChange={(e) => setInfo(e.target.value)}
              name="info"
              as="textarea"
              type="text"
              placeholder="Information"
              value={info}
            />
            <br />
            <Form.Label>Day to complete the task</Form.Label>
            <Form.Control
              onChange={(e) => setDate(e.target.value)}
              name="date"
              type="date"
              placeholder=""
              value={date}
            />
            <br />
            <Form.Select
              onChange={(e) => setComplexity(e.target.value)}
              name="complexity"
              aria-label="Default select example"
              value={complexity}
            >
              <option>How difficult is this task</option>
              <option value="facil">Facil</option>
              <option value="medio">Medio</option>
              <option value="dificil">Dificil</option>
            </Form.Select>
            <br />
            <Form.Check
              onChange={(e) => setDone(e.target.checked)}
              name="done"
              type="checkbox"
              label="Done"
              checked={done}
            />
            <br />
            <Form.Check
              onChange={(e) => setArchived(e.target.checked)}
              name="archived"
              type="checkbox"
              label="Archived"
              checked={archived}
            />
            <br />
            <Button variant="primary" onClick={createTask}>
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
