import { Button, Col, Container, Row, Card } from 'react-bootstrap'
import { useState } from 'react';

const Playground = ({ data, onplayerData }) => {
    const [show, setshow] = useState(false)
    const [result, setResult] = useState({
        Lottery: 0,
        winRound: "",
        won: "",
        cnt: 0
    })

    const updateScore = (rnd) => {
        const name = rnd % 2 === 0 ? "player1" : "player2"
        onplayerData(prev => ({ ...prev, [name]: { ...prev[name], score: prev[name].score + 1 } }))

        if (result.cnt + 1 >= 5 || data[name].score + 1 === 3) {
            alert(`GAME OVER -${name}: ${data[name].name} won !!🏆. play again ☺`)
            setResult(prev => ({
                Lottery: 0,
                winRound: "",
                won: "",
                cnt: 0
            }))
            return;
        }
        setResult(prev => ({ ...prev, winRound: name, cnt: prev.cnt + 1 }))
    }



    const onClickHandler = () => {
        setshow(true)
        let rnd = Math.floor(Math.random() * 13)
        if (rnd < 6) {
            rnd = Math.random() > 0.5 ? rnd : -rnd;
        }
        setResult(prev => ({ ...prev, Lottery: rnd }))
        updateScore(rnd)
    }

    return <Container>
        <h1>chosen names:</h1>
        <hr></hr>
        <Row>
            <Col>
                <h4>player 1 name: <span className="names">{data.player1.name}</span> </h4>
                <hr></hr>
                <p>score: {data.player1.score}</p>
            </Col>
            <Col>
                <h4>player 2 name:<span className="names">{data.player2.name}</span> </h4>
                <hr></hr>
                <p>score: {data.player2.score}</p>
            </Col>
        </Row>
        <hr></hr>
        <Card className="text-center">
            <Button
                className="w-50 m-3"
                variant="dark"
                onClick={() => onClickHandler("player2")}
                disabled={data.player1.name.length >= 1 ? false : true}>Play</Button>
            <p>
                the number is :
            </p>
            <p className={show ? "" : "hidden"}>
                {result.Lottery}
            </p>
            <p>the winner is:<span className="mx-1 font2">{result.winRound}</span></p>
            <p>number of round: {result.cnt}</p>
        </Card>
    </Container >
}

export default Playground;