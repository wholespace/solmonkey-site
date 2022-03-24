import { FC } from "react";
import { MarketCardContainer } from "./styled";

interface MarketType {
  img: StaticImageData;
  text: string;
  price: string;
}

const MarketCard: FC<MarketType> = ({ img, text, price }) => {
  return (
    <MarketCardContainer>
      <img src={img.src} />
      <div className="text">{text}</div>
      <div className="price">{price}</div>
      <button>BUY NOW</button>
    </MarketCardContainer>
  );
};

export default MarketCard;
