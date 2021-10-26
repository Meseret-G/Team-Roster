import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import SignIn from '../views/SignIn';
import Routes from '../routes';
import { getPlayers } from '../api/data/playerdata';

const Container = styled.div`
  width: 60%;
  margin: auto;
  padding: 50px 0;

  h1 {
    color: white;
    text-align: center;
    font-size: 64px;
    font-weight: 400;
  }
`;

function Initialize() {
  const [user, setUser] = useState(null);
  const [players, setPlayers] = useState([]);
  const [editPlayer, setEditPlayer] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authenticated) => {
      if (authenticated) {
        const userInfoObject = {
          fullName: authenticated.displayName,
          profileImage: authenticated.photoURL,
          uid: authenticated.uid,
          user: authenticated.email.split('@')[0],
        };
        setUser(userInfoObject);
        getPlayers().then(setPlayers);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      {user ? (
        <Container>
          <Navigation />
          <h1> Man Utd Team</h1>
          <Routes
            players={players}
            setPlayers={setPlayers}
            player={editPlayer}
            setEditPlayer={setEditPlayer}
            user={user}
          />
        </Container>
      ) : (
        <SignIn user={user} />
      )}
    </>
  );
}

export default Initialize;
