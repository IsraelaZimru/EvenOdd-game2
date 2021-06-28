import { Form, Button, Card, Accordion } from 'react-bootstrap'
import { useState } from 'react';

const PlayerForm = ({ onplayerData, onupdateNames }) => {
    const [validated, setValidated] = useState(false);
    const [info, setInfo] = useState({
        firstName: "",
        secondName: "",
        rounds: 0
    });


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
        if (!!info.firstName.length && !!info.secondName.length) {
        }
        onplayerData(prev => ({
            ...prev,
            player1: { ...prev["player1"], name: info["firstName"] },
            player2: { ...prev["player2"], name: info["secondName"] },
            rounds: info["rounds"]
        }))

        const temp = []
        for (let player in info) {
            if (player !== "rounds" && info[player].length >= 1)
                temp.push(info[player])
        }
        onupdateNames(temp)

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
            <Form.Group controlId="validationCustom05">
                <Form.Label>number of rounds:</Form.Label>
                <Form.Control type="number" name="rounds" onChange={e => onChangeHandler(e.target)} required />
                <Form.Control.Feedback type="invalid">
                    please enter a number.
                </Form.Control.Feedback>
            </Form.Group>

            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            click me if want to add more player
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Form.Group controlId="validationCustom03">
                                <Form.Control type="text" name="threeName" onChange={e => onChangeHandler(e.target)} placeholder="three name..." />
                            </Form.Group>
                            <Form.Group controlId="validationCustom04">
                                <Form.Control type="text" name="fourName" onChange={e => onChangeHandler(e.target)} placeholder="four name..." />
                            </Form.Group>
                            <Form.Group controlId="validationCustom04">
                                <Form.Control type="text" name="fiveName" onChange={e => onChangeHandler(e.target)} placeholder="five name..." />
                            </Form.Group>
                            <Form.Group controlId="validationCustom04">
                                <Form.Control type="text" name="sixName" onChange={e => onChangeHandler(e.target)} placeholder="six name..." />
                            </Form.Group>
                            <Form.Group controlId="validationCustom04">
                                <Form.Control type="text" name="sevenName" onChange={e => onChangeHandler(e.target)} placeholder="seven name..." />
                            </Form.Group>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <Button type="submit">Submit</Button>
        </Form >
    </>
    );
}

export default PlayerForm;