import React, { useState} from 'react'
import { Modal, MyVerticallyCenteredModal } from "react-bootstrap";

function ModalPost(props) {
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
          Votre annonce a bien été enregistrée.
          Vous allez être automatiquement redirigé vers la page d'accueil.
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default ModalPost

