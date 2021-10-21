// index for router
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Team from '../views/Team';
import New from '../views/New';

export default function Routes({
  player, players, setPlayers, setEditPlayer,
}) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/Team"
          component={() => (
            <Team
              players={players}
              setPlayers={setPlayers}
              setEditPlayer={setEditPlayer}
            />
          )}
        />
        <Route
          exact
          path="/New"
          component={() => (
            <New
              player={player}
              setPlayers={setPlayers}
              setEditPlayer={setEditPlayer}
            />
          )}
        />
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
  }),
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayers: PropTypes.func.isRequired,
  setEditPlayer: PropTypes.func.isRequired,
};

Routes.defaultProps = { player: {} };
