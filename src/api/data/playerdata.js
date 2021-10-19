import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getPlayers = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/players.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});
export default getPlayers;
