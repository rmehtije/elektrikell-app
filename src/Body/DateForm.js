import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import { setErrorMessage } from '../services/stateService';
import { useDispatch } from 'react-redux';

function DateForm({ show, setShow, setSearchDate }) {
    console.log('DateForm');

    const dispatch = useDispatch();

    const handleClose = () => setShow(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        let start = event.target.start.value;
        let end = event.target.end.value;

        const currentDate = moment();

        if(!start || !end) {
            dispatch(setErrorMessage('Alg ja Lopp kuupaevad peavad olema maaratud'));
            return;
        }

        if(currentDate.isBefore(start)) {
            dispatch(setErrorMessage('Alg kuupaev peab olema minevikus'));
            return;
        }

        if(currentDate.isAfter(end)) {
            dispatch(setErrorMessage('Lopp kuupaev peab olema tulevikus'));
            return;
        }

        start = moment(start);
        end = moment(end);

        if(start.diff(end, 'days') >= 1) {
            dispatch(setErrorMessage('Alg ja Lopp kuupaeva vahe peab olema rohkem kui 1 paev'));
            return;
        }

        setSearchDate({
            start: start.format(),
            end: end.format(),
            pastHours: currentDate.diff(start, 'hours'),
        });
    };

    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Maara kuupaevad</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Alg. kuupaev</Form.Label>
                            <Form.Control name="start" type="datetime-local" placeholder="start date" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Lopp kuupaev</Form.Label>
                            <Form.Control name="end" type="datetime-local" placeholder="end date" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                            Otsi
                        </Button>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default DateForm;
