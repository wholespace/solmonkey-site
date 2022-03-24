import { FC } from "react";

import Link from "next/link";

import { MarketContainer } from "./styled";

import MarketCard from "@components/MarketCard";

import market1 from "@public/assets/images/market-1.png";
import market2 from "@public/assets/images/market-2.png";
import market3 from "@public/assets/images/market-3.png";

const Index: FC = () => {
  return (
    <MarketContainer>
      <div className="title">MARKETPLACE</div>
      <div className="market">
        <MarketCard
          imgage={market1}
          text={"DIAMOND HEAD #161"}
          price={"1500 $SMU"}
        ></MarketCard>
        <MarketCard
          imgage={market2}
          text={"MoneyBOy #1564"}
          price={"50000 $SMU"}
        ></MarketCard>
        <MarketCard
          imgage={market3}
          text={"SOLGOD #1345"}
          price={"60000 $SMU"}
        ></MarketCard>
      </div>
    </MarketContainer>
  );
};

export default Index;
