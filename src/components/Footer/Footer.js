import React from "react";
import css from './Footer.module.css';

import Logo from '../Logo/Logo';
import SocialsList from "../SocialsList/SocialsList";
import GridList from "../GridList/GridList";
import LinksListGettingStarted from "../LinksListGettingStarted/LinksListGettingStarted";
import LinksListDevelopers from "../LinksListDevelopers/LinksListDevelopers";
import LinksListCommunity from "../LinksListCommunity/LinksListCommunity";
import LinksListCompany from "../LinksListCompany/LinksListCompany";
import StayInTheLoop from "../StayInTheLoop/StayInTheLoop";
import LinksListCypressIO from "../LinksListCypressIO/LinksListCypressIO";
import { useViewportContext } from "../../context/Viewport";

import { ReactComponent as BackgroundSVG } from './assets/background.svg';

function Footer() {
  const { isMobileView, viewportWidth } = useViewportContext();
  let widthPhase = 0;
  if(viewportWidth >= 640) {
    widthPhase = 1;
  }
  if(viewportWidth >= 1100) {
    widthPhase = 2;
  }

  return (
    <footer className={css['container']}>
      <BackgroundSVG className={css['background']}/>
      
      <div className={`${css['content']} max-width`}>
        {widthPhase === 0 && <Logo/>}
        {widthPhase === 0 && <SocialsList type="b" isMobileView={isMobileView}/>}

        <div className={`${css['middle']} ${widthPhase >= 2 && css['middle--desktop']}`}>
          <GridList columnsCount={isMobileView ? 2 : 4} style={{ rowGap: 24 }}>
            <LinksListGettingStarted type="b" isFull={true}/>
            <LinksListDevelopers type="b"/>
            <LinksListCommunity type="b"/>
            <LinksListCompany type="b" isFull={true}/>
          </GridList>

          <StayInTheLoop/>
        </div>

        <div className={css['bottom']}>
          <LinksListCypressIO type="b" isHorizontal={true}/>
          {widthPhase !== 0 && <SocialsList type="b" isMobileView={isMobileView}/>}
        </div>
      </div>
    </footer>
  );
}

export default Footer;