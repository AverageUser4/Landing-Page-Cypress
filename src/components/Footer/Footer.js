import React from "react";
import css from './Footer.module.css';

import Logo from '../Logo/Logo';
import SocialsList from "../SocialsList/SocialsList";
import GridList from "../GridList/GridList";
import GettingStartedList from "../GettingStartedList/GettingStartedList";
import DevelopersList from "../DevelopersList/DevelopersList";
import CommunityList from "../CommunityList/CommunityList";
import { useViewportContext } from "../../context/Viewport";

import { ReactComponent as BackgroundSVG } from './assets/background.svg';
import CompanyList from "../CompanyList/CompanyList";

function Footer() {
  const { isMobileView } = useViewportContext();

  return (
    <footer className={css['container']}>
      <BackgroundSVG className={css['background']}/>
      
      <div className={`${css['content']} max-width`}>
        <Logo/>
        <SocialsList type="b" isMobileView={isMobileView}/>

        <GridList columnsCount={4}>
          <GettingStartedList type="b" isFull={true}/>
          <DevelopersList type="b"/>
          <CommunityList type="b"/>
          <CompanyList type="b" isFull={true}/>
        </GridList>
      </div>
    </footer>
  );
}

export default Footer;