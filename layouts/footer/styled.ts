import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  .line {
    height: 9px;
    width: 100%;
    background: linear-gradient(180deg, #e02f29 0%, rgba(224, 47, 41, 0) 100%);
  }

  .text {
    font-family: "Graduate";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 155.1%;

    display: flex;
    align-items: flex-end;
    text-align: center;
    letter-spacing: 0.2em;
    text-transform: capitalize;

    color: #ffffff;
    margin-top: 20px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
  }
`;
