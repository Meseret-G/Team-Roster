import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getPlayers = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/players.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createPlayer = (obj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/players.json`, obj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${dbURL}/players/{firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getPlayers().then(resolve);
        });
    })
    .catch(reject);
});

const updatePlayer = (obj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbURL}/players/${obj.firebaseKey}.json`, obj)
    .then(() => getPlayers().then(resolve))
    .catch(reject);
});

const deletePlayer = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbURL}/players/${firebaseKey}.json`)
    .then(() => getPlayers().then(resolve))
    .catch(reject);
});

export {
  getPlayers, createPlayer, updatePlayer, deletePlayer,
};
