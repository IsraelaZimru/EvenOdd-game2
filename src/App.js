import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import PlayerForm from './components/PlayerForm';
import Playground from './components/Playground';
import './App.css';

function App() {
  const [data, setData] = useState({
    player1: {
      score: 0,
      name: ""
    },
    player2: {
      score: 0,
      name: ""
    },
    rounds: 0
  })

  const updateData = (newData) => {
    setData(newData)
    // console.log(data);
  }

  return <Container>
    <div className="text-center">
      <h1 >EvenOdd game</h1>
      <p className="font">You have to enter players name to start the game! </p>
    </div>
    <hr></hr>
    <Row>
      <Col>
        <PlayerForm onplayerData={updateData} />
      </Col>
      <Col>
        <Playground data={data} onplayerData={updateData} />
      </Col>
    </Row>
  </Container>
}

export default App;
