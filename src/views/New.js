import React from 'react';
import PropTypes from 'prop-types';
import PlayerForm from '../components/PlayerForm';

export default function New({
  player, setPlayers, setEditPlayer, user,
}) {
  return (
    <>
      <h1>Add A Player</h1>
      <PlayerForm
        player={player}
        setPlayers={setPlayers}
        setEditPlayer={setEditPlayer}
        user={user}
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
    uid: PropTypes.string,
  }),
  setPlayers: PropTypes.func.isRequired,
  setEditPlayer: PropTypes.func.isRequired,
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
};

New.defaultProps = { player: {} };
