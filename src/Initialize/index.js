import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Navigation from '../components/Navigation';
import SignIn from '../views/SignIn';
import Routes from '../routes';
import { getPlayers } from '../api/data/playerdata';

function Initialize() {
  const [user, setUser] = useState(null);
  const [players, setPlayers] = useState([]);
  const [editPlayer, setEditPlayer] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authenticated) => {
      if (authenticated) {
        const userInfoObject = {
          fullNmae: authenticated.displayName,
          profileImage: authenticated.photoURL,
          uid: authenticated.uid,
          user: authenticated.email.split('@')[0],
        };
        setUser(userInfoObject);
        getPlayers(userInfoObject).then(setPlayers);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      {user ? (
        <>
          <Navigation />
          <h1> Manchester United </h1>
          <Routes
            players={players}
            setPlayers={setPlayers}
            player={editPlayer}
            setEditPlayer={setEditPlayer}
            user={user}
          />
        </>
      ) : (
        <SignIn user={user} />
      )}
    </>
  );
}

export default Initialize;
