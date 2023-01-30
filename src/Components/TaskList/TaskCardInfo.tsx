import { Button, Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../app/store"
import { setTitle, setId, setInfo, setDate, setComplexity, setShowInfo, } from "../../features/tasks/GlobalSlice"

const TaskCardInfo = () => {
    const globalState = useSelector((state: RootState) => state.global.value)

    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(setId(''));
        dispatch(setTitle(''));
        dispatch(setInfo(''));
        dispatch(setDate(''));
        dispatch(setComplexity(''));
        dispatch(setShowInfo(false))
    }

    return(
        <Modal show={globalState.showInfo} onHide={handleClose}>
            <div className="card">
                <div className="card-header">
                    <h2>{globalState.title}</h2>
                </div>
                <div className="card-body">
                    <h5>{globalState.info}</h5>
                    <br />
                    <h5>Esta tarea es de dificultad: {globalState.complexity}</h5>
                </div>
                <div className="card-footer">
                    completar esta tarea antes de: {globalState.date}
                </div>
            </div>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default TaskCardInfo