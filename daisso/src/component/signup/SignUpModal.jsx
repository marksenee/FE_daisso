import React from "react";
import Modal from "./Modal";

function SingupModal({ show, modalHandler }) {
  return <>{show ? <Modal modalHandler={modalHandler} /> : null}</>;
}

export default SingupModal;
