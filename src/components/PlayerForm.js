import React, { useState, useEffect } from 'react';
import {
  Label, Input, FormGroup, Form, Button,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { createPlayer, updatePlayer } from '../api/data/playerdata';

// inital state obj
const initialState = {
  imageUrl: '',
  name: '',
  position: '',
  uid: '',
};

export default function PlayerForm({ obj, setPlayers }) {
  const [formInput, setFormInput] = useState(initialState);
  // check if a firebaseKey exist when the component mounts. If it does, set the value of the form input to the obj(player) data
  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        firebaseKey: obj.firebaseKey,
        name: obj.name,
        position: obj.position,
        imageUrl: obj.imageUrl,
        uid: obj.uid,
      });
    }
  }, [obj]);
  // Reset the initial state on call of the resetForm function
  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updatePlayer(formInput).then((players) => {
        setPlayers(players);
        resetForm();
      });
    } else {
      createPlayer(formInput).then((players) => {
        setPlayers(players);
        resetForm();
      });
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="imageUrl">Image URL</Label>
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
          <Label for="name">Name</Label>
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
          <Label for="position"> Position</Label>
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
        <Button className="btn btn-success" type="submit">
          {obj.firebaseKey ? 'Update' : 'Submit'}
        </Button>
      </Form>
    </div>
  );
}

PlayerForm.propTypes = {
  obj: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    position: PropTypes.string,
    uid: PropTypes.string,
  }),
  setPlayers: PropTypes.func.isRequired,
};

PlayerForm.defaultProps = {
  obj: {},
};
