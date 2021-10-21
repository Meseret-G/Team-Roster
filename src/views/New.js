import React from 'react';
import PropTypes from 'prop-types';
import PlayerForm from '../components/PlayerForm';

export default function New({ player, setPlayers, setEditPlayer }) {
  return (
    <>
      <h1>Add A Player</h1>
      <PlayerForm
        player={player}
        setPlayers={setPlayers}
        setEditPlayer={setEditPlayer}
      />
    </>
  );
}

New.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    position: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
  setPlayers: PropTypes.func.isRequired,
  setEditPlayer: PropTypes.func.isRequired,
};

New.defaultProps = { player: {} };
