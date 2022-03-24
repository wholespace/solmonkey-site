import { FC } from "react";
import { MarketCardContainer } from "./styled";

interface MarketType {
  imgage: StaticImageData;
  text: string;
  price: string;
}

const MarketCard: FC<MarketType> = ({ imgage, text, price }) => {
  return (
    <MarketCardContainer>
      <img src={imgage.src} />
      <div className="text">{text}</div>
      <div className="price">{price}</div>
      <button>BUY NOW</button>
    </MarketCardContainer>
  );
};

export default MarketCard;
