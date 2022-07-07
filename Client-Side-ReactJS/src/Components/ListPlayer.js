import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

function ListPlayer(props) {
  const { players, editFormHandler } = props;

  return (
    <Row className="overflow-auto players">
      {players.map((data) => (
        <Col key={data.id} md={4}>
          <Card className="bg-success text-light shadow mb-3">
            <Card.Header className="text-center">{data.username}</Card.Header>
            <Card.Body>
              <Card.Text>Email: {data.email}</Card.Text>
              <Card.Text>Password: {data.password}</Card.Text>
              <Card.Text>Experience: {data.experience}</Card.Text>
              <Card.Text>Level: {data.lvl}</Card.Text>
              <Button variant="warning me-2" onClick={() => editFormHandler(data)}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </Button>
              <Button variant="danger">
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ListPlayer;
