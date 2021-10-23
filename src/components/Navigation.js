import React from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonGroup } from 'reactstrap';
import styled from 'styled-components';
import { signOutUser } from '../api/auth';

const NavigationStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  button {
    background-color: gray;
    color: white;
    flex-wrap: wrap;
    display: flex;
    padding: 8px;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 2px white;
    font-size: 16px;
    width: 150px;
    height: 50px;
  }
`;

export default function Navigation() {
  const history = useHistory();
  return (
    <NavigationStyle>
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
    </NavigationStyle>
  );
}
