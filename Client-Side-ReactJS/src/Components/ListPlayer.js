import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import Modals from "./Modals";

function ListPlayer(props) {
  const { players, searchPlayer, editFormHandler, deleteFormHandler } = props;

  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);

  const handleShow = (idPlayer) => {
    setShow(true);
    setId(idPlayer);
  };

  const handleClose = () => setShow(false);

  let data;

  if(searchPlayer.length > 0){
    data = searchPlayer
  } else {
    data = players
  }

  return (
    <>
      <Row className="overflow-auto players">
        {data.map((data) => (
          <Col key={data.id} md={6} xl={4}>
            <Card className="bg-success text-light shadow mb-3">
              <Card.Header className="text-center">{data.username}</Card.Header>
              <Card.Body>
                <Card.Text>Email: {data.email}</Card.Text>
                {/* <Card.Text>Password: {data.password}</Card.Text> */}
                <Card.Text>Experience: {data.experience}</Card.Text>
                <Card.Text>Level: {data.lvl}</Card.Text>
                <Button
                  variant="warning me-2"
                  onClick={() => editFormHandler(data)}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Button>
                <Button 
                  variant="danger" 
                  onClick={() => handleShow(data.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modals
        show={show}
        handleClose={handleClose}
        deleteFormHandler={deleteFormHandler}
        id={id}
      />
    </>
  );
}

export default ListPlayer;
