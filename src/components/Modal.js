import React from "react";
import Modal from "react-animated-modal";
import propTypes from "prop-types";

const UsersModal = ({ children }) => {
  const [showModal, setShowModal] = React.useState(true);

  return (
    <Modal
      visible={showModal}
      closeModal={() => setShowModal(false)}
      type="bouncein"
    >
      {children}
    </Modal>
  );
};

export default UsersModal;

UsersModal.propTypes = {
  children: propTypes.node.isRequired,
};
