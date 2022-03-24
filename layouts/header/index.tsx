import { FC } from "react";
import { HeaderContainer } from "./styled";

import Link from "next/link";

// import Image from 'next/image';

import logo from "@public/assets/images/logo.png";

//! import icons
import twitter from "@public/assets/icons/twitter.png";
import discord from "@public/assets/icons/discord.png";
import headerLeft from "@public/assets/icons/header-left.png";
import headerRight from "@public/assets/icons/header-right.png";

import ConnectPhantom from "@components/ConnectPhantom";

const Index: FC = () => {
  return (
    <HeaderContainer>
      <header>
        <Link href={"/#roadmap"}>
          <div className="item">Roadmap</div>
        </Link>
        <Link href={"/#team"}>
          <div className="item">Team</div>
        </Link>
        <div className="logo">
          <img src={logo.src} />
        </div>
        <Link href={"/campus"}>
          <div className="item">CAMPUS</div>
        </Link>
        <Link href={"/#links"}>
          <div className="item">LINKS</div>
        </Link>
      </header>
      <div className="text">SOLANA MONKEY UNIVERSITY</div>
      <div className="tools">
        <div className="left">
          <img src={headerLeft.src} />
        </div>
        <div className="discord">
          <img src={discord.src} />
        </div>
        <ConnectPhantom></ConnectPhantom>
        <div className="twitter">
          <img src={twitter.src} />
        </div>
        <div className="right">
          <img src={headerRight.src} />
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Index;
