import React from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonGroup } from 'reactstrap';
import { signOutUser } from '../api/auth';

export default function Navigation() {
  const history = useHistory();
  return (
    <div>
      <ButtonGroup size="lg">
        <button
          onClick={() => history.push('/team')}
          type="button"
          className="btn btn-light border border-dark"
        >
          Team
        </button>
        <button
          onClick={() => history.push('/new')}
          type="button"
          className="btn btn-light border border-dark"
        >
          Add A Player
        </button>
        <button
          onClick={signOutUser}
          type="button"
          className="btn btn-light border border-dark"
        >
          SignOut
        </button>
      </ButtonGroup>
    </div>
  );
}