import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

function ListPlayer(props) {
  const { players } = props;

  return (
    <Row>
      {players.map((data) => (
        <Col md={4}>
          <Card className="bg-success text-light shadow">
            <Card.Header className="text-center">{data.username}</Card.Header>
            <Card.Body>
              <Card.Text>
                <p>Email: {data.email}</p>
                <p>Password: {data.password}</p>
                <p>Experience: {data.experience}</p>
                <p>Level: {data.lvl}</p>
              </Card.Text>
              <Button variant="warning me-2">
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
