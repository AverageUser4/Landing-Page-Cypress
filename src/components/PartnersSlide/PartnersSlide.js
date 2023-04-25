import React from "react";

import Slide from "../Slide/Slide";

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
  return (
    <Slide>

      <a 
        href="https://www.paramount.com/"
        aria-label="ViacomCBS"
      >
        <ViacomSVG/>
      </a>

      <a 
        href="https://www.houzz.com/"
        aria-label="Houzz"
      >
        <HouzzSVG/>
      </a>

      <a 
        href="https://www.trulia.com/"
        aria-label="Trulia"
      >
        <TruliaSVG/>
      </a>

      <a 
        href="https://fortune.com/"
        aria-label="Fortune"
      >
        <FortuneSVG/>
      </a>

      <a 
        href="https://classpass.com/"
        aria-label="Classpass"
      >
        <ClassPassSVG/>
      </a>

      <a 
        href="https://www.nielsen.com/"
        aria-label="Nielsen"
      >
        <NielsenSVG/>
      </a>

      <a 
        href="https://www.warbyparker.com/"
        aria-label="WarbyParker"
      >
        <WarbyParkerSVG/>
      </a>

      <a 
        href="https://www.mercari.com/"
        aria-label="Mercari"
      >
        <MercariSVG/>
      </a>

      <a 
        href="https://www.paypal.com/"
        aria-label="PayPal"
      >
        <PayPalSVG/>
      </a>

      <a 
        href="https://bark.co/"
        aria-label="Bark"
      >
        <BarkSVG/>
      </a>

    </Slide>
  );
}

export default PartnersSlide;