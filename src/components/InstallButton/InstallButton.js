import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import InstallModal from '../InstallModal/InstallModal';

import { ReactComponent as TerminalPromptSVG } from './assets/terminal-prompt.svg';

function InstallButton({ kind = "normal" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  let type = 'round';
  let content = 'Install';
  let hasArrow = true;

  if(kind === 'npm') {
    type = 'd';
    content = (
      <>
        <TerminalPromptSVG/>
        npm install cypress
      </>
    );
    hasArrow = false;
  }
  
  return (
    <>
      <Button
        hasArrow={hasArrow}
        type={type}
        onClick={() => setIsModalOpen(prev => !prev)}
      >
        {content}
      </Button>

      <InstallModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </>
  );
}

InstallButton.propTypes = {
  kind: PropTypes.oneOf(['normal', 'npm']),
};

export default InstallButton;