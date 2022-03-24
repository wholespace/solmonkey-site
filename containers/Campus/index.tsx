import { FC } from "react";

import styled from "styled-components";

import Link from "next/link";

const CampusContainer = styled.div`
  margin-top: 120px;
  .title {
    font-family: "Graduate";
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    line-height: 155.1%;

    text-align: center;
    letter-spacing: 0.12em;
    text-transform: uppercase;

    color: #ffffff;

    text-shadow: 0px 4px 4px #e02f29;

    cursor: pointer;
  }

  .top {
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .bottom {
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Index: FC = () => {
  return (
    <CampusContainer>
      <div className="title">CAMPUS ACTIVITIES</div>
      <div className="top">
        <div className="title">STAKING</div>
        <Link href={"/campus/marketplace"}>
          <div className="title">MARKETPLACE</div>
        </Link>
      </div>
      <div className="bottom">
        <Link href={"/campus/merch"}>
          <div className="title">MERCH STORE</div>
        </Link>
        <Link href={"/campus/beer"}>
          <div className="title">BEER PONG</div>
        </Link>
      </div>
    </CampusContainer>
  );
};

export default Index;
