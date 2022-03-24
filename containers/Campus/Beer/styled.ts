import styled from "styled-components";
export const BeerContainer = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  .title {
    font-family: "Graduate";
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    line-height: 155.1%;
    /* identical to box height, or 70px */

    text-align: center;
    letter-spacing: 0.12em;
    text-transform: uppercase;

    color: #ffffff;

    text-shadow: 0px 4px 4px #e02f29;
  }

  .beer-img {
    max-width: 860px;
    margin-left: auto;
    margin-right: auto;
  }
`;
