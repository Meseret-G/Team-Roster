import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';

export default function player({ taco }) {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={taco.imageUrl} alt="Player Image" />
        <CardBody>
          <CardTitle tag="h5">{taco.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {taco.position}
          </CardSubtitle>
          <CardText> Player Description </CardText>
          <Button className="btn btn-success">Edit</Button>
          <Button className="btn btn-danger">Delete</Button>
        </CardBody>
      </Card>
    </div>
  );
}
player.propTypes = {
  taco: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
  }).isRequired,
};
