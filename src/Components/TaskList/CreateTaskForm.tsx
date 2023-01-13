import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const CreateTaskForm = () => {
    const [show, setShow] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    const [info, setInfo] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [complexity, setComplexity] = useState<string>('');
    const [done, setDone] = useState<boolean>(false);
    const [archived, setArchived] = useState<boolean>(false)

    var baseURL = 'http://127.0.0.1:4000/tasks';

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const createTask:any = (e:any) => {
        e.preventDefault()
        const body = {
            title: title,
            information: info,
            task_date: date,
            complexity: complexity,
            done: done,
            archived: archived
        }
        
        axios
            .post(baseURL, body)
            .then((response) => {
                console.log(response.data);
                alert(response.data.message)
                handleClose();
                setTitle('');
                setInfo('');
                setDate('');
                setComplexity('');
                setDone(false);
                setArchived(false);
            })
            .catch(error=> console.log);
    }

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
                    <Form method="post" onSubmit={createTask}>
                            <Form.Control onChange={e => setTitle(e.target.value)}  name="title" type="text" placeholder="Title" value={title}/>
                            <br />
                            <Form.Control onChange={e => setInfo(e.target.value)} name="info" as="textarea" type="text" placeholder="Information" value={info}/>
                            <br />
                            <Form.Label>Day to complete  the task</Form.Label>
                            <Form.Control onChange={e => setDate(e.target.value)} name="date" type="date" placeholder="" value={date}/>
                            <br />
                            <Form.Select onChange={e => setComplexity(e.target.value)} name="complexity" aria-label="Default select example" value={complexity}>
                                <option>How difficult is this task</option>
                                <option value="facil">Facil</option>
                                <option value="medio">Medio</option>
                                <option value="dificil">Dificil</option>
                            </Form.Select>
                            <br />
                            <Form.Check onChange={e => setDone(e.target.checked)} name="done" type="checkbox" label="Done" checked={done} />
                            <br />
                            <Form.Check onChange={e => setArchived(e.target.checked)} name="archived" type="checkbox" label="Archived" checked={archived} />
                            <br />
                            <Button variant="primary" type="submit">Submit</Button>
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
  
export default CreateTaskForm