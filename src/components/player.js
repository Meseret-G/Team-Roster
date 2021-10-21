import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deletePlayer, updatePlayer } from '../api/data/playerdata';

export default function Player({ player, setPlayers, setEditPlayer }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deletePlayer(player.firebaseKey).then(setPlayers);
    } else {
      updatePlayer(player).then(setPlayers);
    }
  };
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={player.imageUrl} alt="Player Image" />
        <CardBody>
          <CardTitle tag="h5">{player.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {player.position}
          </CardSubtitle>
          <CardText> Player Description </CardText>
          <Button
            onClick={() => setEditPlayer(player)}
            className="btn btn-success"
          >
            Edit
          </Button>
          <Button
            onClick={() => handleClick('delete')}
            className="btn btn-danger"
          >
            Delete
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
Player.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    imageUrl: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  setPlayers: PropTypes.func.isRequired,
  setEditPlayer: PropTypes.func.isRequired,
};
