import React from 'react';
import PropTypes from 'prop-types';
import css from './InstallModal.module.css';

import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Card from '../Card/Card';
import Separator from '../Separator/Separator';

import { ReactComponent as QuestionMarkSVG } from './assets/question-mark.svg';
import { ReactComponent as CrossSVG } from './assets/cross.svg';
import { ReactComponent as TerminalSVG } from './assets/terminal.svg';
import { ReactComponent as FileSVG } from './assets/file.svg';
import { ReactComponent as ClipboardSVG } from './assets/clipboard.svg';
import { ReactComponent as DownloadSVG } from './assets/download.svg';

function InstallModal({ isOpen, setIsOpen }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <div className={css['container']}>

          <div className={css['top']}>
            <div className={css['top__left']}>
              <h3 className="head">Installing Cypress</h3>
              <div className={css['separator']}/>
              <Button
                href="https://docs.cypress.io/guides/getting-started/installing-cypress"
                type="link link-b"
              >
                Need help
                <QuestionMarkSVG/>
              </Button>
            </div>

            <div>
              <Button 
                type="icon"
                onClick={() => setIsOpen(false)}
              >
                <CrossSVG/>
              </Button>
            </div>
          </div>

          <div className={css['bottom']}>
            <Card
              Icon={TerminalSVG}
              heading="NPM Install"
              text="Click to copy the command below to paste into your terminal:"
              button={
                <Button type="b">
                  <ClipboardSVG/>
                  npm install cypress
                </Button>
              }
            />

            <Separator
              text="OR"
            />

            <Card
              Icon={FileSVG}
              heading="Direct Download"
              text="Download the Cypress application directly to give it a try:"
              button={
                <Button type="c">
                  <DownloadSVG/>
                  Download Cypress.zip
                </Button>
              }
            />
          </div>

        </div>
      </Modal>
    </>
  );
}

InstallModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default InstallModal;