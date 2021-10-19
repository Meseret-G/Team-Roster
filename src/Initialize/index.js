import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Navigation from '../components/Navigation';
import SignIn from '../views/SignIn';
// import getPlayers from '../api/data/playerdata';

function Initialize() {
  const [user, setUser] = useState(null);
  // const [players, setPlayers] = useState([]);

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
        </>
      ) : (
        <SignIn />
      )}
    </>
  );
}

export default Initialize;
