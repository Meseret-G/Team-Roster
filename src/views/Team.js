import React from 'react';
import PropTypes from 'prop-types';
import Player from '../components/Player';

export default function Team({ players, setPlayers, setEditPlayer }) {
  return (
    <>
      <h1>TEAM</h1>

      {players.map((player) => (
        <Player
          player={player}
          setPlayers={setPlayers}
          key={player.firebaseKey}
          setEditPlayer={setEditPlayer}
        />
      ))}
    </>
  );
}

Team.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayers: PropTypes.func.isRequired,
  setEditPlayer: PropTypes.func.isRequired,
};
