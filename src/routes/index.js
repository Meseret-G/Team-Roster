// index for router
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Team from '../views/Team';
import New from '../views/New';

export default function Routes({
  player,
  players,
  setPlayers,
  setEditPlayer,
  user,
}) {
  return (
    <div>
      <Switch>
        <Route exact path="/Team">
          <Team
            user={user}
            players={players}
            setPlayers={setPlayers}
            setEditPlayer={setEditPlayer}
          />
        </Route>
        <Route exact path="/New">
          <New
            user={user}
            player={player}
            setPlayers={setPlayers}
            setEditPlayer={setEditPlayer}
          />
        </Route>
      </Switch>
    </div>
  );
}
Routes.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    position: PropTypes.string,
    imageUrl: PropTypes.string,
    uid: PropTypes.string,
  }),
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayers: PropTypes.func.isRequired,
  setEditPlayer: PropTypes.func.isRequired,
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
};

Routes.defaultProps = { player: {} };
