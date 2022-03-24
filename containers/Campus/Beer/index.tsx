import { FC } from "react";

import { BeerContainer } from "./styled";
import Beer from "@public/assets/images/beer.png";

import Image from "next/image";

const Index: FC = () => {
  return (
    <BeerContainer>
      <div className="title">BEER PONG!</div>
      <img src={Beer.src} className="beer-img" />
    </BeerContainer>
  );
};

export default Index;
