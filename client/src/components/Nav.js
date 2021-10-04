import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import GamifyModal from "./GamifyModal";
import './Nav.scss'
import "./rpgui.css";

export default function Nav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <article id="nav-bar">
      <button onClick={handleShow} className="new-goal-button">
        <img src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/88c2a3fcf8ce72e.png" className="exclamation" alt="" />
      </button>
      <Modal show={show} >
        <GamifyModal handleClose={handleClose} />
      </Modal>
    </article>
  );
}