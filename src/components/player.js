import React from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardImgOverlay,
} from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { deletePlayer } from '../api/data/playerdata';

const ButtonStyle = styled.button`
  margin: 3px;
  border: 5px solid;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100px;
`;

const DivStyle = styled.div`
  margin-left: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-wrap: wrap;
  img {
    width: 400px;
    height: 300px;
    object-fit: cover;
  }
`;
export default function Player({ player, setPlayers, setEditPlayer }) {
  const history = useHistory();
  const handleClick = (method) => {
    if (method === 'delete') {
      deletePlayer(player.firebaseKey).then(setPlayers);
    } else if (method === 'edit') {
      setEditPlayer(player);
      history.push('/new');
    }
  };
  return (
    <div>
      <DivStyle>
        <Card style={{ marginBottom: '20px' }}>
          <CardImg width="10%" src={player.imageUrl} alt="Player Image" />
          <CardImgOverlay>
            <CardTitle style={{ color: 'white' }} tag="h5">
              {player.name}
            </CardTitle>
            <CardSubtitle
              style={{ color: 'white' }}
              tag="h6"
              className="header1"
            >
              {player.position}
            </CardSubtitle>
            <ButtonStyle
              type="button"
              onClick={() => handleClick('edit')}
              className="btn btn-success"
            >
              Edit
            </ButtonStyle>
            <ButtonStyle
              onClick={() => handleClick('delete')}
              className="btn btn-danger"
            >
              Delete
            </ButtonStyle>
          </CardImgOverlay>
        </Card>
      </DivStyle>
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
