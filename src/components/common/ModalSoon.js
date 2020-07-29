import React from "react";
import { Modal } from "react-bootstrap";

function ModalSoon(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Caval Cloud
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Cette fonctionnalité n'est pas encore disponible.
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default ModalSoon;
