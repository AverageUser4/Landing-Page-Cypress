import React, { useState } from 'react';

import Button from '../Button/Button';
import InstallModal from '../InstallModal/InstallModal';

function InstallButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <Button
        hasArrow={true}
        type="round"
        onClick={() => setIsModalOpen(prev => !prev)}
      >
        Install
      </Button>

      <InstallModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </>
  );
}

export default InstallButton;