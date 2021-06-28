import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import PlayerForm from './components/PlayerForm';
import Playground from './components/Playground';
import './App.css';
import LstPlayers from './components/LstPlayers';
import Dashboard from './components/Dashboard';

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
    rounds: 0,
    winRound: "",
    loseRound: "",
  })
  const [loser, setLoser] = useState("")
  const [names, setNames] = useState([])

  useEffect(() => {
    const newlst = names.filter(name => name !== loser);
    setNames(newlst)
    console.log("names:", newlst);
  }, [loser])

  const updateData = (newData) => {
    setData(newData)
  }

  const updateNames = (newData) => {
    setNames(newData)
  }



  return <Container>
    <div className="text-center">
      <h1 >EvenOdd game</h1>
      <p className="font">You have to enter players name to start the game! </p>
    </div>
    <Dashboard names={names} />
    <hr></hr>
    <Row>
      <Col>
        <LstPlayers lst={names} />
        <PlayerForm onplayerData={updateData} onupdateNames={updateNames} />
      </Col>
      <Col>
        <Playground data={data} onplayerData={updateData} onloser={setLoser} />
      </Col>
    </Row>
  </Container>
}

export default App;
