import { ListGroup } from 'react-bootstrap'



const LstPlayers = ({ lst }) => {
    return <ListGroup>
        {lst.map((player, i) => <>
            <ListGroup.Item kay={i}>{player}</ListGroup.Item>
        </>)}
    </ListGroup>
}

export default LstPlayers;