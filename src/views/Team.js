import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Player from '../components/player';
import { getPlayers } from '../api/data/playerdata';

export default function Team({
  players, setPlayers, setEditPlayer, user,
}) {
  useEffect(() => {
    let isMounted = true;
    getPlayers().then((playerArray) => {
      if (isMounted) setPlayers(playerArray);
    });
    return () => {
      isMounted = false;
    };
  }, [players]);
  return (
    <>
      <h1>TEAM</h1>

      {players.map((player) => (
        <Player
          key={player.firebaseKey}
          player={player}
          setPlayers={setPlayers}
          setEditPlayer={setEditPlayer}
          user={user}
        />
      ))}
    </>
  );
}

Team.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayers: PropTypes.func.isRequired,
  setEditPlayer: PropTypes.func.isRequired,
  user: PropTypes.shape({
    uid: PropTypes.string,
  }),
};

Team.defaultProps = { user: {} };
