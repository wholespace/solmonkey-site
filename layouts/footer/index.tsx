import { FC } from "react";

import { FooterContainer } from "./styled";

const Index: FC = () => {
  return (
    <FooterContainer>
      <div className="line"></div>
      <div className="text">
        All Rights Reserved © 2022 - Privacy Policy | Terms of Service |
        Ownership
      </div>
    </FooterContainer>
  );
};

export default Index;
