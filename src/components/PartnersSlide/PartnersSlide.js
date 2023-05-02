import React from "react";
import css from './PartnersSlide.module.css';

import Slide from "../Slide/Slide";
import { useViewportContext } from "../../context/Viewport";

import { ReactComponent as ViacomSVG } from './assets/viacom.svg';
import { ReactComponent as HouzzSVG } from './assets/houzz.svg';
import { ReactComponent as TruliaSVG } from './assets/trulia.svg';
import { ReactComponent as FortuneSVG } from './assets/fortune.svg';
import { ReactComponent as ClassPassSVG } from './assets/classpass.svg';
import { ReactComponent as NielsenSVG } from './assets/nielsen.svg';
import { ReactComponent as WarbyParkerSVG } from './assets/warby-parker.svg';
import { ReactComponent as MercariSVG } from './assets/mercari.svg';
import { ReactComponent as PayPalSVG } from './assets/paypal.svg';
import { ReactComponent as BarkSVG } from './assets/bark.svg';

function PartnersSlide() {
  const { viewportWidth } = useViewportContext();
  let elementsPerPage = 2;

  if(viewportWidth >= 500) {
    elementsPerPage = 3;
  }
  if(viewportWidth >= 800) {
    elementsPerPage = 4;
  }
  
  return (
    <Slide elementsPerPage={elementsPerPage}>

      <a 
        className={css['element']}
        href="https://www.paramount.com/"
        aria-label="ViacomCBS"
      >
        <ViacomSVG/>
      </a>

      <a 
        className={css['element']}
        href="https://www.houzz.com/"
        aria-label="Houzz"
      >
        <HouzzSVG/>
      </a>

      <a 
        className={css['element']}
        href="https://www.trulia.com/"
        aria-label="Trulia"
      >
        <TruliaSVG/>
      </a>

      <a 
        className={css['element']}
        href="https://fortune.com/"
        aria-label="Fortune"
      >
        <FortuneSVG/>
      </a>

      <a 
        className={css['element']}
        href="https://classpass.com/"
        aria-label="Classpass"
      >
        <ClassPassSVG/>
      </a>

      <a 
        className={css['element']}
        href="https://www.nielsen.com/"
        aria-label="Nielsen"
      >
        <NielsenSVG/>
      </a>

      <a 
        className={css['element']}
        href="https://www.warbyparker.com/"
        aria-label="WarbyParker"
      >
        <WarbyParkerSVG/>
      </a>

      <a 
        className={css['element']}
        href="https://www.mercari.com/"
        aria-label="Mercari"
      >
        <MercariSVG/>
      </a>

      <a 
        className={css['element']}
        href="https://www.paypal.com/"
        aria-label="PayPal"
      >
        <PayPalSVG/>
      </a>

      <a 
        className={css['element']}
        href="https://bark.co/"
        aria-label="Bark"
        style={{ width: 100 }}
      >
        <BarkSVG/>
      </a>

    </Slide>
  );
}

export default PartnersSlide;