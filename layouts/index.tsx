import { FC, ReactNode } from "react";

import styled from "styled-components";
import Header from "@layouts/header";

import { useRouter } from "next/router";

const LayoutContainer = styled.div`
  max-width: 1440px;
  margin: auto;
  /* background-color: #211c1c; */

  .vector {
    position: absolute;
    z-index: -1;
    left: 48.71vw;
    right: auto;

    width: 50vw;
    height: 800px;

    background: radial-gradient(
      100.01% 50% at 0.01% 50%,
      rgba(224, 47, 41, 0.5) 0%,
      rgba(39, 40, 58, 0) 100%
    );
    transform: matrix(-1, 0, 0, 1, 0, 0);
    opacity: 60%;
  }

  .vector-2 {
    top: 1700px;
    left: 0;
    transform: rotate(360deg);
  }

  .vector-3 {
    top: 2400px;
  }
  .vector-4 {
    left: 50vw;
  }
`;

interface LayoutProps {
  children: ReactNode;
}

const Index: FC<LayoutProps> = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <LayoutContainer>
      {pathname === "/" ? (
        <>
          <div className="vector vector-1"></div>
          <div className="vector vector-2"></div>
          <div className="vector vector-3"></div>
        </>
      ) : (
        <div className="vector vector-4"></div>
      )}
      <Header></Header>
      {children}
    </LayoutContainer>
  );
};

export default Index;
