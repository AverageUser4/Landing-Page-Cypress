import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal/Modal';

function InstallModal({ isOpen, setIsOpen }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <span>hlsadosiajodisa</span>
      </Modal>
    </>
  );
}

InstallModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default InstallModal;