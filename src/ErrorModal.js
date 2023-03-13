import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { setErrorMessage } from './services/stateService';

function ErrorModal() {
    console.log('ErrorModal');

    const errorMessage = useSelector((state) => state.errorMessage);
    const dispatch = useDispatch();
    const handleClose = () => dispatch(setErrorMessage(null));

    return (
        <Modal show={!!errorMessage} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>{errorMessage}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ErrorModal;
