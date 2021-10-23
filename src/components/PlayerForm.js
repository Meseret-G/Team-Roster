import React, { useState, useEffect } from 'react';
import {
  Label, Input, FormGroup, Form,
} from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { createPlayer, updatePlayer } from '../api/data/playerdata';

const FormStyle = styled.div`
  button {
    margin-left: 350px;
    text-align: center;
    width: 100px;
    background-color: gray;
  }
  .form-select {
    margin-bottom: 20px;
  }
`;

// inital state obj
const initialState = {
  imageUrl: '',
  name: '',
  position: '',
  uid: '',
};

export default function PlayerForm({
  player,
  setPlayers,
  setEditPlayer,
  user,
}) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();
  // check if a firebaseKey exist when the component mounts. If it does, set the value of the form input to the obj(player) data
  useEffect(() => {
    if (player.firebaseKey) {
      setFormInput({
        firebaseKey: player.firebaseKey,
        name: player.name,
        position: player.position,
        imageUrl: player.imageUrl,
        uid: player.uid,
      });
    }
  }, [player]);
  // Reset the initial state on call of the resetForm function
  const resetForm = () => {
    setFormInput({ ...initialState });
    setEditPlayer({});
  };

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (player.firebaseKey) {
      updatePlayer(formInput).then(setPlayers);
      // setPlayers(players);
      resetForm();
      history.push('/team');
    } else {
      createPlayer({ ...formInput, uid: user.uid }).then((players) => {
        setPlayers(players);
        resetForm();
        history.push('/team');
      });
    }
  };
  return (
    <FormStyle>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={formInput.name}
            placeholder="Player Name"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            type="text"
            name="imageUrl"
            id="imageUrl"
            value={formInput.imageUrl}
            placeholder="Player image URL"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="position"> Position</Label>
          <Input
            className="form-select"
            type="select"
            name="position"
            id="position"
            value={formInput.position}
            onChange={handleChange}
            required
          >
            <option hidden value="">
              Select A Position
            </option>
            <option value="Goalkeeper">Goalkeeper</option>
            <option value="Defender">Defender</option>
            <option value="Midfielder">Midfielder</option>
            <option value="Forward">Forward</option>
          </Input>
        </FormGroup>
        <button className="btn btn-success" type="submit">
          {player.firebaseKey ? 'Update' : 'Submit'}
        </button>
      </Form>
    </FormStyle>
  );
}

PlayerForm.propTypes = {
  player: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    position: PropTypes.string,
    uid: PropTypes.string,
  }),
  setPlayers: PropTypes.func.isRequired,
  setEditPlayer: PropTypes.func.isRequired,
  user: PropTypes.shape({
    uid: PropTypes.string,
  }).isRequired,
};

PlayerForm.defaultProps = {
  player: {},
};
