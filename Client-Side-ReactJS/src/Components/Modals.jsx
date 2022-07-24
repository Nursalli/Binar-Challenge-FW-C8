import React from "react";
import { Modal, Button } from "react-bootstrap";

function Modals(props) {
  const { show, handleClose, deleteFormHandler, id } = props;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Player</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are You Sure ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            deleteFormHandler(id);
            handleClose();
          }}
        >
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modals;
