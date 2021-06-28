import { Form, Button, Col, InputGroup } from 'react-bootstrap'
import { useState } from 'react';

const PlayerForm = ({ onplayerData }) => {
    const [validated, setValidated] = useState(false);
    const [info, setInfo] = useState({ firstName: "", secondName: "", rounds: 0 });


    const onChangeHandler = ({ name, value }) => {
        setInfo(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);
        onplayerData(prev => ({
            ...prev,
            player1: { ...prev["player1"], name: info["firstName"] },
            player2: { ...prev["player2"], name: info["secondName"] },
            rounds: info["rounds"]
        }))
    };

    return (<>
        <h1>choose names:</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="w-75">

            <Form.Group controlId="validationCustom03">
                <Form.Label>First player name:</Form.Label>
                <Form.Control type="text" name="firstName" onChange={e => onChangeHandler(e.target)} placeholder="first name..." required />
                <Form.Control.Feedback type="invalid">
                    please enter a name.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom04">
                <Form.Label>Second player name:</Form.Label>
                <Form.Control type="text" name="secondName" onChange={e => onChangeHandler(e.target)} placeholder="second name..." required />
                <Form.Control.Feedback type="invalid">
                    please enter a name.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom04">
                <Form.Label>number of rounds:</Form.Label>
                <Form.Control type="number" name="rounds" onChange={e => onChangeHandler(e.target)} required />
                <Form.Control.Feedback type="invalid">
                    please enter a number.
                </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Submit names</Button>
        </Form >
    </>
    );
}

export default PlayerForm;