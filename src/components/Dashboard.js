import { useState } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap'


const Dashboard = ({ names }) => {
    const [tracking, setTracking] = useState(...names)
    return <Card>
        {/* <ListGroup>
            {lst.map((player, i) => <>
                <ListGroup.Item kay={i}>{player}</ListGroup.Item>
            </>)}
        </ListGroup>  */}
           </Card>
}

export default Dashboard;